const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const custom = require('../webpack.config.js')()

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: (config) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: custom.module.rules, // babel, sass, fonts and images loaders
      },
      resolve: {
        ...config.resolve,
        ...custom.resolve, // custom imports resolvers
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: '[name].[contenthash].css',
        }),
        ...config.plugins,
      ],
    }
  },
}
