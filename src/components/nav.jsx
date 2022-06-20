import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

const Nav = () => {

  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`);

  return (
    <div className="grid grid-cols-1 bg-cover bg-nav-image xl:h-96 h-56 mb-2 shadow rounded-b">
      <nav className="flex flex-col items-center justify-center">
        <header className="font-medium
                         text-slate-200
                         tracking-wide 
                         antialiased 
                         text-xl xl:text-5xl 
                         hover:-translate-y-1 hover:scale-110 hover:text-sky-300 duration-300">
          {data.site.siteMetadata.title}
        </header>
        <ul className="flex flex-row text-zinc-100 text-xl xl:text-3xl ">
          <li className="p-5 hover:-translate-y-1 hover:scale-110 hover:text-sky-300 duration-300">
            <Link to="/">Posty</Link>
          </li>
          <li className="p-5 hover:-translate-y-1 hover:scale-110 hover:text-sky-300 duration-300">
            <Link to="/about">O mnie</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
