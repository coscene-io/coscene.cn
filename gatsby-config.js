console.log(__dirname);
module.exports = {
  siteMetadata: {
    title: `coScene 刻行`,
    description: `场景数据爆炸式增长的当下和未来，刻行帮助各大企业解决增长难题，大幅度降低应用、研发、运维、和售后的成本，降低行业门槛，推动行业发展。`,
    siteUrl: `https://www.coscene.cn`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        ns: ['translations'],
        defaultNS: 'translations',
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`en`, `zh`],
        defaultLanguage: `en`,
        // if you are using Helmet, you must include siteUrl, and make sure you add http:https
        siteUrl: `https://coscene.cn/`,
        // you can pass any i18next options
        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          // keySeparator: false,
          nsSeparator: false,
        },
      },
    },
  ],
};
