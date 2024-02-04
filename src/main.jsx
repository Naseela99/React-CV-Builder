import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Education from './components/Education.jsx'
import './index.css'
import CV_Content from './components/CV.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Education /> */}
    <CV_Content />
  </React.StrictMode>,
)
