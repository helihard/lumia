import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { CartProvider } from "./context/CartContext.jsx"
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/style.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
)
