// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '2022s-Work',
  tagline: '一个开源暑假作业共享项目',
  url: 'https://2022s.ramsong.cn',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/ico.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'RamSong', // Usually your GitHub org/user name.
  projectName: '2022s-Work', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },


  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '2022s-Work',
        logo: {
          alt: 'My Site Logo',
          src: 'img/svg.svg',
        },
        items: [
          {
          type: 'localeDropdown',
          position: 'left',
        },
          {
            type: 'doc',
            docId: 'About',
            position: 'right',
            label: '介绍',
          },
          {
            type: 'doc',
            docId: 'Start',
            position: 'right',
            label: '快速开始',
          },
          {
            href: 'https://github.com/RamSong/2022-Shu',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        copyright: `版权所有 © ${new Date().getFullYear()} 我的项目. 使用 Docusaurus 构建.`,
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '快速开始',
                to: '/docs/Start',
              },
            ],
          },
          {
            title: 'Talk',
            items: [
              {
                label: 'Telegram',
                href: '.',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
            ],
          },
          {
            title: 'My',
            items: [
              {
                label: 'Blog',
                to: 'https://blog.ramsong.cn',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/RamSong/2022-Shu',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
