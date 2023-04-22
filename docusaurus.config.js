// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'joaotul.io',
  tagline: 'Aqui é onde reúno meus conteúdos didáticos para outros devs que querem aprender mais sobre programação',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://joaotul.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'joaotul.io', // Usually your GitHub org/user name.
  projectName: 'joaotul.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
/*         docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        }, */
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Home',
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/docs/sobre_mim', label: 'Conteúdo', position: 'left'},
          {
            href: 'https://github.com/joaotuliojt',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://joaotul.io',
            label: 'Portfólio',
            position: 'right',
          },
          {
            href: 'https://www.linkedin.com/in/jtsoares/',
            label: 'Linkedin',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Conteúdo',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/users/426120432991862784',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/tulio_joao/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/tulio_jao',
              },
              {
                label: 'E-mail',
                href: 'mailto:joaotuliosoares@hotmail.com',
              },
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} João Túlio`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
