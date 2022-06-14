import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="using blogmatic - Home">
      <div className="posts w-full">
        {data.allMdx.nodes.map((node) => {          
          return (
            <div className="flex flex-col mb-2" key={node.id}>
              <div className="flex flex-col p-6 bg-white">
                <div className="text-gray-600 text-sm">Data opublikowania: {node.frontmatter.date}</div>
                <div className="text-zinc-500 font-light text-xl">{node.frontmatter.title}</div>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export const querySite = graphql`
query {
  allMdx (sort: {fields: frontmatter___date, order: DESC}){
    nodes {
      frontmatter {
        date(formatString: "DD MMMM, YYYY", locale: "pl")
        title
        author
      }
      id
    }
  }
}`

export default IndexPage;
