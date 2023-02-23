import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {Provider} from "react-redux"
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Provider store={store}>
    <ToastContainer/>
    <App />
  </Provider>
  </BrowserRouter>
);
