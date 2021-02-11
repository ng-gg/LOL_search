/* eslint-disable no-useless-computed-key */
const path = require('path');
const { addWebpackAlias, override } = require('customize-cra');

module.exports = {
  webpack: override(
    addWebpackAlias({
      ['@Utils']: path.resolve(__dirname, 'src/Utils/'),
      ['@Components']: path.resolve(__dirname, 'src/Components/'),
      ['@Modal']: path.resolve(__dirname, 'src/Components/Modal'),
      ['@Section']: path.resolve(__dirname, 'src/Components/Section/'),
      ['@Logo']: path.resolve(__dirname, 'src/Components/Logo/'),
      ['@Info']: path.resolve(__dirname, 'src/Components/Info/'),
    })
  ),
};
