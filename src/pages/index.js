import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="using blogmatic - Home">
      <div className="posts w-full">
        {data.allMdx.nodes.map((node) => {
          return (
            <div className="flex flex-col p-6 hover:bg-slate-100" key={node.id}>
              <div className="flex">
                <div className="text-gray-600 text-sm mb-2 font-light">
                  <span className="mr-2">{node.frontmatter.author}</span>
                  &bull;
                  <span className="ml-2">Data opublikowania: {node.frontmatter.date}</span>
                </div>
              </div>
              <div className="text-zinc-500 font-bold text-xl mb-2">
              <Link to={`/blog/${node.slug.toLowerCase()}`}>
                {node.frontmatter.title}
                </Link>
              </div>
              <div className="text-sm font-light">{node.frontmatter.desc}</div>
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
          date(formatString: "DD MMMM, YYYY", locale: "pl")
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
