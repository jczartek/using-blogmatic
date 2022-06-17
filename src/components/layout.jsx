import * as React from "react";
import  Nav  from './nav'
import Footer from "./footer";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="min-h-screen w-full">
      <title>{pageTitle}</title>
      <Nav />
      <main className="container my-3">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
