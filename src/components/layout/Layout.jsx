import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "../../utils/ScrollToTop";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-[#CD1C18] selection:text-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow pt-[64px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
