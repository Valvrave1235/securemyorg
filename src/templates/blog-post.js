// src/templates/blog-post.js
import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from "../components/layout"

import { formatDate } from "@/lib/utils";

export default function BlogPost({ data }) {
    const post = data.markdownRemark;
    const thumbnail = getImage(post.frontmatter.thumbnail);

    return (
      <Layout>
        <div className='relative container mx-auto py-10 lg:py-20  max-w-7xl px-4'>
          {thumbnail && (
            <GatsbyImage
              image={thumbnail}
              alt={post.frontmatter.title}
              
              className='rounded-lg shadow-lg mb-8 w-1/2 h-auto mx-auto  '
            />
          )}
          <h1 className='text-4xl lg:text-6xl font-bold text-gray-300 mb-6'>
            {post.frontmatter.title}
          </h1>
          <p className='text-lg text-gray-600 mb-8'>
            {formatDate(post.frontmatter.date)}
          </p>
          <div
            className='prose prose-lg prose-invert max-w-none'
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
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
            gatsbyImageData(width: 2000, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`;

