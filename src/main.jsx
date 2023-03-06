import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {Theme} from './assets/Theme'
import {  ThemeProvider } from '@mui/material/styles';
ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={Theme}>
    <App />
  </ThemeProvider>
)
