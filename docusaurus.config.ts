import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "⚖️ ETH Mobile | Docs",
  tagline: "Open-source toolkit for building mobile dapps",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://docs.ethmobile.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "dewdrip",
  projectName: "eth-mobile-docs",

  onBrokenLinks: "ignore",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: [require.resolve("docusaurus-lunr-search")],
  scripts: [
    {
      src: "https://plausible.io/js/plausible.js",
      async: true,
      defer: true,
      "data-domain": "docs.ethmobile.io",
    },
  ],
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
          // sidebarCollapsible: false,
          sidebarCollapsed: true,
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/eth-mobile/docs/edit/main/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    // Replace with your project's social card
    colorMode: {
      respectPrefersColorScheme: true,
    },
    image: "img/thumbnail.jpg",
    navbar: {
      title: "ETH Mobile | Docs",
      logo: {
        alt: "eth-mobile-logo",
        src: "img/logo.svg",
      },
      items: [
        {
          href: "https://ethmobile.dev",
          label: "Website",
          position: "right",
        },
        {
          href: "https://github.com/eth-mobile/docs",
          label: "GitHub Docs",
          position: "right",
        },
        {
          href: "https://github.com/eth-mobile/eth-mobile",
          label: "GitHub ETH Mobile",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Built with ♥ at DewDrip",
          items: [
            {
              label: "Dewdrip Website",
              to: "https://dewdrip.com/",
            },
            {
              label: "DewDrip Twitter",
              to: "https://twitter.com/dewdrip_com",
            },
          ],
        },
        {
          title: "GitHub",
          items: [
            {
              label: "ETH Mobile Website",
              href: "https://ethmobile.dev",
            },
            {
              label: "ETH Mobile GitHub",
              href: "https://github.com/eth-mobile/eth-mobile",
            },
            {
              label: "Docs GitHub",
              href: "https://github.com/eth-mobile/docs",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Twitter",
              href: "https://x.com/ethmobile_dev",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ETH Mobile Docs. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
