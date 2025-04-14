import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';
import { config } from '../config/config.js';
import { logger } from '../utils/logger.js';
import { redisClient } from '../config/database.js';
import { sendVerificationEmail } from '../services/emailService.js';

export const register = async (req, res, next) => {
  try {
    const { email, password, firstName, lastName, role } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Create new user
    const user = new User({
      email,
      password,
      firstName,
      lastName,
      role,
    });

    await user.save();

    // Generate verification token
    const verificationToken = jwt.sign(
      { userId: user._id },
      config.jwt.secret,
      { expiresIn: '24h' }
    );

    // Store token in Redis
    await redisClient.set(
      `verification:${user._id}`,
      verificationToken,
      'EX',
      24 * 60 * 60 // 24 hours
    );

    // Send verification email
    await sendVerificationEmail(user.email, verificationToken);

    logger.info(`New user registered: ${user.email}`);

    res.status(201).json({
      message: 'Registration successful. Please check your email for verification.',
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check if email is verified
    if (!user.isVerified) {
      return res.status(403).json({ message: 'Please verify your email first' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      config.jwt.secret,
      { expiresIn: config.jwt.expiresIn }
    );

    // Update last login
    user.lastLogin = new Date();
    await user.save();

    logger.info(`User logged in: ${user.email}`);

    res.json({
      token,
      user: {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const verifyEmail = async (req, res, next) => {
  try {
    const { token } = req.params;

    // Verify token
    const decoded = jwt.verify(token, config.jwt.secret);
    const { userId } = decoded;

    // Check if token exists in Redis
    const storedToken = await redisClient.get(`verification:${userId}`);
    if (!storedToken || storedToken !== token) {
      return res.status(400).json({ message: 'Invalid or expired verification token' });
    }

    // Update user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.isVerified = true;
    await user.save();

    // Delete token from Redis
    await redisClient.del(`verification:${userId}`);

    logger.info(`Email verified for user: ${user.email}`);

    res.json({ message: 'Email verified successfully' });
  } catch (error) {
    next(error);
  }
}; 