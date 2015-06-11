"use strict";

//Variables List
var Hapi = require('hapi'),
    fs = require('fs'),
    globalUtility = require('./custom_modules/global_utility'),
    appConfig = require('./config/Config.json'),
    mongooseAuto = require('./custom_modules/mongooseAuto'),
    async = require('async'),
    log = require('./custom_modules/custom-imagemin-log'),
    pack = require('./package.json'),
    hapiSwagger = require('hapi-swagger'),
    hapiRole = require('./custom_modules/hapi-role-manager'),
    good = require('good'),
    EventEmitter = require("events").EventEmitter,
    cluster = require('cluster'),
    numCPUs = require('os').cpus().length,
    task = [],
    server = {},
    bootstrap;

//Setting Up env
task.push(function (callback) {
    process.env.name = process.env.name || 'development';
    var msg = 'Server Running on ' + process.env.name + ' Environment';
    log.info(msg);
    callback(null, msg);
});

//Custom Logger
task.push(function (callback) {
    global.log = log;
    var msg = 'Setting up Custom Logger';
    callback(null, msg);
});

//Setting up global object
//eg: _config, log
task.push(function (callback) {
    globalUtility.setGlobalConstant({_config: appConfig[process.env.name]});
    var msg = 'Setting up Global Configuration';
    callback(null, msg);
});

//Mongoose
task.push(function (callback) {
    mongooseAuto(_config.database, callback);
});

//Running Bootstrap Task
task.push(function (callback) {
    bootstrap = require('./config/Bootstrap');
    bootstrap(process.env.name, callback);
});

//Init Server
task.push(function (callback) {
    // Create a server with a host and port
    server = new Hapi.Server();
    server.connection({
        port: process.env.PORT = process.env.PORT || _config.server.port,
        routes: {
            cors: _config.server.allowCrossDomain
        }
    });
    callback(null, 'server variable setting up');
});

//Add Plugin
task.push(function (callback) {
    var plugin = [];

    plugin.push(function (cb) {
        server.register({
            register: hapiSwagger,
            options: {
                apiVersion: pack.version,
                payloadType: 'json'
            }
        }, function (err) {
            var msg = 'Swagger interface loaded';
            cb(err, msg);
        });
    });

    plugin.push(function (cb) {
        var msg = 'Hapi Auth Cookie Enabled';
        server.register(require('hapi-auth-cookie'), function (err) {
            server.auth.strategy('session', 'cookie', {
                password: _config.cookie.password,
                cookie: _config.cookie.cookie,
                redirectTo: _config.cookie.redirectTo,
                isSecure: _config.cookie.isSecure
            });
            cb(err, msg)
        });
    });

    plugin.push(function (cb) {
        server.register({
            register: good,
            options: {
                opsInterval: 1000,
                reporters: [{
                    reporter: require('good-console'),
                    events: {log: '*', response: '*'}
                }]
            }
        }, function (err) {
            if (err) {
                console.error(err);
            }
            var msg = 'Good Plugin loaded';
            cb(err, msg);
        });
    });

    plugin.push(function (cb) {
        server.register({
            register: hapiRole,
            options: {
                rolesType: _config.userRoles.rolesType,
                cookieName: _config.cookie.cookie,
                roleFieldName: _config.userRoles.roleFieldName
            }
        }, function (err) {
            if (err) {
                console.error(err);
            }
            var msg = 'Hapi Roles Plugin loaded';
            cb(err, msg);
        });
    });

    async.parallel(plugin, function (err, rslt) {
        callback(err, rslt);
    });
});

//Apply Emitter Binding
task.push(function (callback) {

    var sharedService = new EventEmitter();

    function createEmitterEvent(eventList) {
        eventList.forEach(function (event) {
            sharedService.on(event.eventName, event.handler);
        });
    }

    function applyEmitterBind(dirPath) {
        var dirName = dirPath;
        var data = fs.readdirSync(dirName);
        data.forEach(function (dta) {
            var path = dirName + '/' + dta;
            if (fs.lstatSync(path).isDirectory()) {
                applyEmitterBind(path);
            } else {
                createEmitterEvent(require(path));
            }
        });
    }

    applyEmitterBind(__dirname + '/sharedServices');
    globalUtility.setGlobalConstant({sharedService: sharedService});
    var msg = 'Shared Service Events Binding Complete';
    callback(null, msg);
});

//Apply Routing Config
task.push(function (callback) {

    function applyRouteConfig(dirPath) {
        var dirName = dirPath;
        var data = fs.readdirSync(dirName);
        data.forEach(function (dta) {
            var path = dirName + '/' + dta;
            if (fs.lstatSync(path).isDirectory()) {
                applyRouteConfig(path);
            } else {
                server.route(require(path));
            }
        });
    }

    // Static Directory Route
    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: _config.server.publicDirectory,
                listing: false
            }
        }
    });

    applyRouteConfig(__dirname + '/route');
    var msg = 'Routs setup complete';

    callback(null, msg);
});

//Run Server
async.series(task, function (err, data) {
    if (err) {
        process.exit();
    } else {
        //Running Cluster
        if (cluster.isMaster) {
            // Fork workers.
            for (var i = 0; i < numCPUs; i++) {
                cluster.fork();
            }

            cluster.on('exit', function (worker, code, signal) {
                console.log('worker ' + worker.process.pid + ' died');
            });
        } else {
            // In this case its a HTTP server
            // Start the server
            server.start(function () {
                log.cool('Server running on SERVER: ' + (process.env.HOST ? process.env.HOST : _config.server.host) + ' PORT:' + (process.env.PORT ? process.env.PORT : _config.server.port));
            });
        }
    }
});

