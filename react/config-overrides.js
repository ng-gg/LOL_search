/* eslint-disable no-useless-computed-key */
const path = require('path');
const { addWebpackAlias, override } = require('customize-cra');

module.exports = {
  webpack: override(
    addWebpackAlias({
      ['@Utils']: path.resolve(__dirname, 'src/Utils/'),
      ['@Components']: path.resolve(__dirname, 'src/Components/'),
      ['@Image']: path.resolve(__dirname, 'src/Components/Image'),
      ['@Page']: path.resolve(__dirname, 'src/Components/Page/'),
      ['@Header']: path.resolve(__dirname, 'src/Components/Header/'),
    })
  ),
};
