"use strict";

var async = require('async');

module.exports = function (environment, callback) {

    //Add your task name here
    var env = {
        "development": [Test],
        "production": [Test],
        "staging": [Test]

        //Add more environment here
        // "uat": [Test,YourTaskName, Add more task here]
    };

    function play(environment) {
        async.series(env[environment], function (err, result) {
            log.cool('Booting process completed.');
            callback(err, result);
        })
    }

    play(environment);

    //Sample Task
    function Test(callback) {
        //log.cool('Test Task Runner');
        callback(null, 'Test Task Runner')
    }

    //Task Template to create more task
    function YourTaskName(callback) {
        // ADD YOUR LOGIC HERE..
        // SO ON..
        callback(ERROR_MESSAGE, SUCCESS_MESSAGE)
    }
};

