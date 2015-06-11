"use strict";

var fs = require('fs'),
    mongoose = require("mongoose"),
    path = require('path');

module.exports = function MongooseDB(database, callback) {

    //Methods
    function Connect() {
        var dbURI = _config.database.url;
        mongoose.connect(dbURI, {server: {poolSize: database.poolSize}}, function (dd, err) {
            if (err) {
                log.error('Failed to connect with MongoDB - reconnecting in 3 seconds. ' + err);
                setTimeout(Connect, 3000);
            }
        });
    }

    function dirStructureToObject(path, callback) {
        var obj = {};
        fs.readdir(path, function (err, data) {
            data.forEach(function (fileName) {
                var schema = mongoose.Schema(require(path + '/' + fileName)),
                    name = fileName.replace('.js', '');
                obj[name] = mongoose.model(name, schema);
            });
            callback(err, obj);
        });
    }

    //DB Url format refactored for development enviroment.
    var dbURI = database.url;
    Connect();
    dirStructureToObject(path.resolve(__dirname, '../../mongooseDomain'), function (error, model) {
        if (error) {
            throw new error;
        } else {
            global.Modal = model;
        }
    });

// CONNECTION EVENTS
// When successfully connected
    mongoose.connection.on('connected', function () {
        var msg = 'Mongoose default connection open successfully';
        log.cool(msg);
        callback(null, msg);
    });

// If the connection throws an error
    mongoose.connection.on('error', function (err) {
        log.error('Mongoose default connection error: ' + err);
        callback(err, null);
    });

// When the connection is disconnected
    mongoose.connection.on('disconnected', function () {
        log.warn('Mongoose default connection disconnected');
    });

// If the Node process ends, close the Mongoose connection
    process.on('SIGINT', function () {
        mongoose.connection.close(function () {
            log.warn('Mongoose default connection disconnected through app termination');
            process.exit(0);
        });
    });
};

