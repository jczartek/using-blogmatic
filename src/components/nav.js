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
    <div className="w-full flex justify-center items-center bg-cover bg-nav-image xl:h-96 bg-gradient-to-r mb-2 shadow">
      <nav className="flex flex-col items-center justify-center">
        <header className="font-medium
                         text-zinc-100 
                         tracking-wide 
                         antialiased 
                         text-2xl xl:text-5xl 
                         hover:-translate-y-1 hover:scale-110 hover:text-sky-300 duration-300">
          {data.site.siteMetadata.title}
        </header>
        <ul className="flex flex-row text-zinc-100 text-2xl xl:text-3xl ">
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
