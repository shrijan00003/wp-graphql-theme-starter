import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useGet_PostsQuery } from "../generated/graphql";

const Main = () => {
  const { data, error, loading } = useGet_PostsQuery();
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  console.log("_____________data__________", data);

  return <Router>Data is available</Router>;
};

export default Main;
