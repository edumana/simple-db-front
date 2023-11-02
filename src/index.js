import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import App from './App.jsx'
import theme from './theme'
import { BrowserRouter as Router } from 'react-router-dom'

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
      <Router>
          <App/>
      </Router>
  </ThemeProvider>,
)
