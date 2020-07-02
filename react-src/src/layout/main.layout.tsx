import React from "react";

import Footer from "../partials/footer";
import { Header } from "../partials/header";

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
