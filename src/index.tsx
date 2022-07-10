import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "assets/fonts/Roboto-Regular.ttf";

import PublicRoutes from "routes/public";
import HeroesContextProvider from "contexts/heroes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HeroesContextProvider>
      <PublicRoutes />
    </HeroesContextProvider>
  </React.StrictMode>
);
