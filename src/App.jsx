import React from "react";
import "./index.css";
import { Navbar, Footer } from "@components";
import { AppRouter } from "./router/AppRouter";

export const App = () => {
  return (
    <>
      <Navbar />
      <AppRouter />
      <Footer />
    </>
  );
};

export default App;
