import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import Loader from "./components/Loader.tsx";
import "./index.css";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Suspense>
    </BrowserRouter>
  </RecoilRoot>
);
