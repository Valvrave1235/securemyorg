
// gatsby-node.js
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');


exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                "@/components": path.resolve(__dirname, "src/components"),
                "@/lib/utils": path.resolve(__dirname, "src/lib/utils"),
            },
        },
    });
};



exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === 'MarkdownRemark') {
        // Get the path for the markdown file and create a slug
        const slug = createFilePath({ node, getNode, basePath: 'blog' });

        createNodeField({
            node,
            name: 'slug',
            // Prepend '/blogs' to the slug
            value: `/blogs${slug}`,
        });
    }
};

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve('./src/templates/blog-post.js'),
            context: {
                slug: node.fields.slug,
            },
        });
    });
};
