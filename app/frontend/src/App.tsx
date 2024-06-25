import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import { AppRoutes } from './components/AppRoutes'

const queryClient = new QueryClient()
function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <Container fluid className="p-3">
          <AppRoutes />
        </Container>
      </QueryClientProvider>
    </Router>
  )
}

export default App
