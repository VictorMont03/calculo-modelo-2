const withCSS = require("@zeit/next-css");
const withPlugins = require("next-compose-plugins");
const path = require("path");

const nextConfig = {
  env: {
    spaceID: process.env.spaceID,
    accessTokenDelivery: process.env.accessTokenDelivery,
  },
  distDir: ".next",
};

const plugins = [
  withCSS({
    webpack: (config) => {
      // Alias
      config.resolve.alias["~"] = path.resolve(__dirname + "/src");
      return config;
    },
  }),
];

module.exports = withPlugins(plugins, nextConfig);

module.exports = {
  images: {
    deviceSizes: [320, 450, 640, 750, 828, 1080, 1200, 1440, 1600, 1920],
    domains: ["projetos.agenciaade.com.br", "agenciaade.com.br"],
  },
};
