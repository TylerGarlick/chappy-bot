require('babel-polyfill');

const ENV = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (ENV !== 'production') {
  require('babel-register');
  module.exports = require('./src');
} else {
  module.exports = require('./dist');
}
