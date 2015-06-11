'use strict';

var figures = require('figures');
var Squeak = require('squeak');

/**
 * Initialize `log`
 */

var log = new Squeak({separator: ' '});

/**
 * Add types
 */

log.type('info', {
    color: 'cyan',
    prefix: '(' + figures.info + ')info:'
});

log.type('warn', {
    color: 'yellow',
    prefix: '(' + figures.warning + ')warn:'
});

log.type('cool', {
    color: 'green',
    prefix: '(' + figures.tick + ')cool:'
}, function () {
    log.end();
});

log.type('error', {
    color: 'red',
    prefix: '(' + figures.cross + ')error:'
}, function () {
    log.end();
});

/**
 * Module exports
 */

module.exports = log;
