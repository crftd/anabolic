/* global __DEV__:true */

module.exports = __DEV__
    ? require('./store.dev')
    : require('./store.prod');