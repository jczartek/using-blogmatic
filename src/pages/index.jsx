import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="using blogmatic - Home">
      <div className="flex flex-wrap gap-y-4 md:mx-4 mx-2">
        {data.allMdx.nodes.map((node) => {
          return (
            <div className="flex flex-col md:p-6 p-3 bg-stone-800 hover:bg-stone-700 basis-full shadow rounded" key={node.id}>
           
                <div className="flex text-orange-300 text-sm mb-2 font-light">
                  <span className="mr-2">{node.frontmatter.author}</span>
                  &bull;
                  <span className="ml-2">{node.frontmatter.date}</span>
                </div>
          
              <div className="text-slate-400 font-bold text-xl mb-2">
              <Link to={`/blog/${node.slug.toLowerCase()}`}>
                {node.frontmatter.title}
                </Link>
              </div>
              <div className="text-sm text-teal-500 font-light">{node.frontmatter.desc}</div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export const querySite = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "DD MMMM YYYY", locale: "pl")
          title
          author
          desc
        }
        id
        slug
      }
    }
  }
`;

export default IndexPage;
