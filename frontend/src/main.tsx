import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ReducerExampleProvider } from "./context/ReducerExampleContext";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <CartProvider>
          <ReducerExampleProvider>
            <App />
          </ReducerExampleProvider>
        </CartProvider>
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
