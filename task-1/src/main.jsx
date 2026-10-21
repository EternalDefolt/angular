import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { TasksProvider } from './TasksContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <TasksProvider>
      <App />
    </TasksProvider>
  </BrowserRouter>
)
