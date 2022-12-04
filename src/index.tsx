import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import store from "./redux/store"
import { Provider } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <html>
    <head>
      <link href="/dist/output.css" rel="stylesheet" />
    </head>
    <body>
      <React.StrictMode>
        <Provider store={store}>
          <ToastContainer />
          <App />
        </Provider>
      </React.StrictMode>
    </body>
  </html>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
