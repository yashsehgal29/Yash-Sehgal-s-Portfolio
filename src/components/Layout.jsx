import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="w-screen h-[75vh]  ">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
