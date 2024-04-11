import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
        <div className="container">
            <div className="text-overlay">
                <p>This text is overlaid on the screen.</p>
                <p>Created by: Homer Simpson</p>
            </div>
        </div>

    </React.StrictMode>,
)
