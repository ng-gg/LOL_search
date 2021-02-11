/* eslint-disable no-useless-computed-key */
const path = require('path');
const { addWebpackAlias, override } = require('customize-cra');

module.exports = {
  webpack: override(
    addWebpackAlias({
      ['@Utils']: path.resolve(__dirname, 'src/Utils/'),
      ['@Components']: path.resolve(__dirname, 'src/Components/'),
      ['@Content']: path.resolve(__dirname, 'src/Components/Content/'),
      ['@Header']: path.resolve(__dirname, 'src/Components/Header/'),
    })
  ),
};
