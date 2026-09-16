import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import SolutionsHub from "./pages/SolutionsHub";
import SolutionDetail from "./pages/SolutionDetail";
import IndustriesHub from "./pages/IndustriesHub";
import IndustryDetail from "./pages/IndustryDetail";
import Products from "./pages/Products";
import HowWeWork from "./pages/HowWeWork";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<SolutionsHub />} />
          <Route path="/solutions/:category" element={<SolutionDetail />} />
          <Route path="/industries" element={<IndustriesHub />} />
          <Route path="/industries/:slug" element={<IndustryDetail />} />
          <Route path="/products" element={<Products />} />
          <Route path="/how-we-work" element={<HowWeWork />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          {/* Catch-all redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
