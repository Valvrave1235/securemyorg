// src/templates/blog-post.js
import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from "../components/layout"


export default function BlogPost({ data }) {
    const post = data.markdownRemark;
    const thumbnail = getImage(post.frontmatter.thumbnail);

    return (
        <Layout>
            <div className='py-32 pt-52 prose prose-invert prose-stone max-w-none '>
                {thumbnail && <GatsbyImage image={thumbnail} alt={post.frontmatter.title} />}
                <h1>{post.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
    );
}

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        description
        thumbnail {
          childImageSharp {
            gatsbyImageData(width: 200, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`;

