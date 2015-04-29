"use strict";

var async = require('async');

module.exports = function (environment, callback) {

    //Add your task name here
    var env = {
        "common": [Test],
        "development": [Test],
        "production": [Test],
        "staging": [Test]
    };

    function play(environment) {
        async.series(env[environment], function (err, result) {
            log.cool('Booting process completed.');
            callback(err, result);
        })
    }

    play(environment);

    //Write your task here
    function Test(callback) {
        log.cool('Test Task Runner');
        callback(null, 'Test Task Runner')
    }
};

