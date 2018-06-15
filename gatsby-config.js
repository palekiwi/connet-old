module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    defLang: 'en',
    pages: {
      en: [
        {to: '/about', label: 'About', img: 'about'},
        {to: '/contact', label: 'Contact', img: 'contact'},
      ],
      zh: [
        {to: '/about', label: '關於健格科技', img: 'about'},
        {to: '/contact', label: '根我們聯絡', img: 'contact'},
      ],
    },
    solutions: {
      en: [
        {to: '/microgrids', label: 'Microgrids', img: 'microgrid'},
        {to: '/scada', label: 'SCADA', img: 'scada'},
        {to: '/flood-control', label: 'Flood Control', img: 'flood-control'},
        {to: '/energy-management', label: 'Energy Management', img: 'energy-management'},
        {to: '/automation', label: 'Automation', img: 'automation'},
        {to: '/other', label: 'Other Projects', img: 'solar'},
      ],
      zh: [
        {to: '/microgrids', label: '微電網', img: 'microgrids'},
        {to: '/scada', label: 'SCADA', img: 'scada'},
        {to: '/flood-control', label: '抽水站自動化', img: 'flood-control'},
        {to: '/energy-management', label: 'EMS', img: 'energy-management'},
        {to: '/automation', label: '自動化', img: 'automation'},
        {to: '/other', label: '其他服務', img: 'solar'},
      ],
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.ts'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/img`
      }
    }
  ],
}
