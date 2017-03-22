/* global __DEV__:true */

module.exports = __DEV__
    ? require('./Root.dev')
    : require('./Root.prod');