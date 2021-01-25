const path = require('path');

module.exports = {
    siteMetadata: {
        title: `Bolaji Ahmad Portfolio`,
        firstName: 'Bolaji',
        middleName: 'Ahmad',
        lastName: 'Olapade',
        description: `Get ready to realize your ideas`,
        author: `@bolajahmad`,
        projects: [
            {
                id: 'gsmeisn',
                title: `Nirsal Agsmeis`,
                author: `bolajahmad`,
                description: "Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                stacks: [
                    'react', 'typescript', 'rxjs'
                ],
                duration: 4
            },
            {
                id: 'devthuts',
                title: `bolajahmad portfolio`,
                author: `bolajahmad`,
                description: "Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                stacks: [
                    'react', 'gatsby', 'graphql', 'typescript'
                ],
                duration: 5
            },
            {
                id: 'shop$iis',
                title: `Shopies Challange`,
                author: `bolajahmad`,
                description: "Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                stacks: [
                    'react', 'react hooks', 'typescript/javscript', 'scss/sass'
                ],
                duration: 1
            },
            {
                id: 'talXs',
                title: `Talos trading bot`,
                author: `bolajahmad & eleos`,
                description: "Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                stacks: [
                    'react', 'axios', 'classes'
                ],
                duration: 2
            },
        ]
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: path.join(__dirname, 'src', 'images'),
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-typescript`,
            options: {
                isTSX: true, // defaults to false
                jsxPragma: `jsx`, // defaults to "React"
                allExtensions: true, // defaults to false
            },
        },
    ],
}