import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import { MDXRenderer } from "gatsby-plugin-mdx";

const BlogPost = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-stone-800 rounded w-11/12 p-6 my-1">
          <header className="text-xl mb-2">
            <div className="flex text-orange-300 text-sm mb-2 font-light">
              <span className="mr-2">{data.mdx.frontmatter.author}</span>
              &bull;
              <span className="ml-2">
                Data opublikowania: {data.mdx.frontmatter.date}
              </span>
            </div>

            <div className="font-bold text-slate-400">
              {data.mdx.frontmatter.title}
            </div>
          </header>

          <article className="font-light leading-relaxed text-stone-200">
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        author
        title
        date(formatString: "DD MMMM YYYY", locale: "pl")
      }
      body
    }
  }
`;

export default BlogPost;
