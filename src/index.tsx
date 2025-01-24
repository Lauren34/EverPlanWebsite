import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Demo from "./pages/Demo";
import NewPage from "./pages/NewPage";
import VenuesPage from "./pages/VenuesPage";
import HairPage from "./pages/HairPage";
import MakeupPage from "./pages/MakeupPage";
import PhotographersPage from "./pages/PhotographersPage";
import MusicPage from "./pages/MusicPage";
import ShoppingCartPage from "./pages/ShoppingCartPage"; // Shopping Cart Page
import FloristPage from "./pages/FloristPage"; // Florist Page
import DresserPage from "./pages/DresserPage"; // Dresser Page
import PlannerPage from "./pages/PlannerPage"; // Planner Page

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/calendar" element={<Demo />} />
          <Route path="/new" element={<NewPage />} />
          <Route path="/venues" element={<VenuesPage />} />
          <Route path="/hair" element={<HairPage />} />
          <Route path="/makeup" element={<MakeupPage />} />
          <Route path="/photographers" element={<PhotographersPage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
          <Route path="/florist" element={<FloristPage />} /> {/* Florist Page */}
          <Route path="/dresser" element={<DresserPage />} /> {/* Dresser Page */}
          <Route path="/planner" element={<PlannerPage />} /> {/* Planner Page */}
        </Routes>
      </Router>
    </StyledEngineProvider>
  </React.StrictMode>
);