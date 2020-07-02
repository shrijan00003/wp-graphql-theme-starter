import React from "react";
import { Header } from "../partials/header";
import Footer from "../partials/footer";

const MainLayout: React.FC = ({ children }) => {
  return (
    <div className="bg-dark text-white" style={{ height: "100vh" }}>
      <Header />
      <div className="container mt-2">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
