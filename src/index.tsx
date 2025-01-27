import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Demo from "./pages/Demo";
import NewPage from "./pages/NewPage";
import ShoppingCartPage from "./pages/ShoppingCartPage"; // Shopping Cart Page

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/calendar" element={<Demo />} />
          <Route path="/new" element={<NewPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
        </Routes>
      </Router>
    </StyledEngineProvider>
  </React.StrictMode>
);
