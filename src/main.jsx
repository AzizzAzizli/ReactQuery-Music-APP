import { QueryClient, QueryClientProvider } from 'react-query'
import App from './App.jsx'
import './assets/css/index.css'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
)
