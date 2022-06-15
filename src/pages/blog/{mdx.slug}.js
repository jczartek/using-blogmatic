import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import { MDXRenderer } from "gatsby-plugin-mdx";

const BlogPost = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>

      <header className="px-6 pt-2 text-zinc-500 font-bold text-xl">{data.mdx.frontmatter.title}</header>

      <article className="p-6 font-light leading-relaxed">
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`;

export default BlogPost;
