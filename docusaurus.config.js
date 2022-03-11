module.exports = {
  title: 'calligraphy',
  tagline: '书法练习轨迹',
  url: 'https://github.com/scott180/calligraphy',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'calligraphy',
      logo: {
        alt: 'calligraphy',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: '书法练习轨迹ReadMe',
              to: 'docs/doc1',
            },
            {
              label: '书法练习轨迹--明月几时有',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Git',
          items: [
            {
              label: 'Gitlab',
              href: 'https://gitlab.com/xuyq123/calligraphy',
            },
            {
              label: 'Github',
              href: 'https://github.com/scott180/calligraphy',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'Weixin',
              href: 'https://mp.weixin.qq.com/s?__biz=Mzg4NDY2OTM0Mg==&mid=2247487244&idx=1&sn=fa21068e783c6b31a62abf71186c1b20',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 无为徐生 书法练习轨迹.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
