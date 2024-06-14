import { RouterProvider } from 'react-router-dom'
import { appRouter } from './routes/routes'
import { ThemeProvider } from './components/theme/ThemeProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from './components/ui/sonner'

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 3 } },
})

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
        <RouterProvider router={appRouter} />
        <Toaster />
        <ReactQueryDevtools initialIsOpen={false} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}
export default App