import React from "react";
import Footer from "./Footer";
import Navbar from "./Header/Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
