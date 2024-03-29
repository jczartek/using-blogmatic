module.exports = {
    siteMetadata: {
        title: 'Jakub Czartek - Using Blogmatic',
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        'gatsby-plugin-postcss',
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `blog`,
                path: `${__dirname}/blog`,
            }
        },
        "gatsby-plugin-mdx",
    ],
}