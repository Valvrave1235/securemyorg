/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Secure My Org`,
        short_name: `Secure My Org`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // Generate PWA icons and a favicon
        icon: `src/images/logo-icon.png`,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-favicons',
    //   options: {
    //     logo: `./src/assets/logo.svg`,
    //     appName: 'Secure My Org - Enterprise Security in 3 Simple Steps',
    //     background: '#000',
    //     icons: {
    //       android: true,
    //       appleIcon: true,
    //       appleStartup: true,
    //       coast: false,
    //       favicons: true,
    //       yandex: false,
    //       windows: false
    //     }
    //   }
    // },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Schibsted+Grotesk`,
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog/`, // The folder where your markdown files are located
      },
    },
    `gatsby-transformer-remark`, // This plugin transforms markdown to html
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    }
  ],
}
