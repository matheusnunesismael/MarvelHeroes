import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Landing from "pages/landing";
import HeroView from "pages/heroView";

const PublicRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/hero/:id" element={<HeroView />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    </Router>
  );
};

export default PublicRoutes;
