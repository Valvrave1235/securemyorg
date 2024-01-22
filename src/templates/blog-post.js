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
        <div className='relative md:max-w-screen-lg  lg:max-w-screen-xlmx-auto  container py-10  lg:py-32  max-w-7xl px-4'>
          <h1 className='text-4xl lg:text-6xl font-bold text-stone-50 mb-6'>
            {post.frontmatter.title}
          </h1>

         <div className='flex flex-col gap-2 py-4'>
            <p className='text-lg '>
              <span>By</span> <strong>{post.frontmatter.author}</strong> on {formatDate(post.frontmatter.date)}
            </p>
            <p className='text-lg font-bold'>
              {post.frontmatter.category}
            </p>
         </div>

          {thumbnail && (
            <GatsbyImage
              image={thumbnail}
              alt={post.frontmatter.title}
              
              className='rounded-lg shadow-lg mb-8 w-full object-cover my-4 h-auto mx-auto  flex justify-center items-center'
            />
          )}
        
         
          <div
            className='prose prose-lg prose-invert max-w-none text-stone-50'
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
        author
        description
        category
        thumbnail {
          childImageSharp {
            gatsbyImageData(width: 2000, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`;

