import React from "react";
import MainLayout from "../layout/main.layout";

const Spinner = () => {
  return (
    <MainLayout>
      <div className="d-flex justify-content-center align-items-lg-center">
        <div className="spinner-border text-light" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </MainLayout>
  );
};

export default Spinner;
