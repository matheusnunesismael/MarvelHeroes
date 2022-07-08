import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import PublicRoutes from "routes/public";
import "assets/fonts/Roboto-Regular.ttf";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <PublicRoutes />
  </React.StrictMode>
);
