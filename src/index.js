import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./styles/index.scss"

const root = ReactDOM.createRoot(document.getElementById("root"))

const StrictApp = () => (
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

root.render(<StrictApp />)
