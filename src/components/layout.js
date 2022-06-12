import * as React from "react";
import  Nav  from './nav'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="min-h-screen w-full bg-gray-200">
      <title>{pageTitle}</title>
      <Nav />
      <div className="container"> 
          <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
