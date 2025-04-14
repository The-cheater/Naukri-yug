import { ThemeProvider } from './components/ThemeProvider'
import AppRoutes from './routes'

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App