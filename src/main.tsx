import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./App.css";
import { UserProvider } from "./context/AuthContext";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
      <GoogleOAuthProvider clientId="489446034228-hu2igdk0tm55gebn49btjabfcemhg70l.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </UserProvider>
  </React.StrictMode>
);
