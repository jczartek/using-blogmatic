import * as React from "react";
import  Nav  from './nav'
import Footer from "./footer";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="min-h-screen w-full bg-white">
      <title>{pageTitle}</title>
      <Nav />
      <div className="container"> 
          <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
