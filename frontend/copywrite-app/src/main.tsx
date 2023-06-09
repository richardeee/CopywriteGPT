import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import { initializeIcons } from "@fluentui/react";
import { initializeFileTypeIcons } from '@fluentui/react-file-type-icons';
initializeFileTypeIcons(/* optional base url */);

import "./index.css";

import Layout from "./pages/layout/Layout";
import Copywrite from "./pages/copywrite/Copywrite";

initializeIcons();

export default function App() {
  return (
      <HashRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<Copywrite />} />
              </Route>
          </Routes>
      </HashRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
