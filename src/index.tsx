import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { store } from "./store/index";
import ErrorBoundary from "./components/error/error";
import "./index.scss";
import App from "./components/app/app";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <HashRouter>
    <React.StrictMode>
      <ErrorBoundary>
        <Provider store={store}>
          <App />
        </Provider>
      </ErrorBoundary>
    </React.StrictMode>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
