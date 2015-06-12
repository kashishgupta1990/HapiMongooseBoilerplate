var Boom = require('boom');
var pluginName = 'hapi-role-manager';

exports.register = function (server, options, next) {

    var pluginName = 'hapi-role-manager';

    //Validate your roles used in routes
    server.after(function (server, next) {
        server.connections.forEach(function (connection) {

            var routes = (connection.routingTable) ? connection.routingTable() : connection.table();

            // Loop through each connection in the server
            server.connections.forEach(function (connection) {

                var routes = (connection.routingTable) ? connection.routingTable() : connection.table();

                // Loop through each api
                routes.forEach(function (route) {

                    var hapiRoleManagerParams = route.settings.plugins[pluginName] ? route.settings.plugins[pluginName] : false;

                    //If hapi-role-manager defined in api then
                    if (hapiRoleManagerParams !== false) {
                        hapiRoleManagerParams.forEach(function (data) {
                            if (options.rolesType.indexOf(data) === -1) {
                                throw new Error(JSON.stringify({
                                    plugin: 'hapi-role-manager',
                                    error: '[' + data + '] role is not allowed to use in routes'
                                }));
                            }
                        });
                    }
                });
            });
            next();

        });
    });

    server.ext('onPostAuth', function (request, reply) {
        var allowedRolesForRequest = request.route.settings.plugins[pluginName];
        var cookieUserRole;
        var isAuthorized = false;
        if (request.state[options.cookieName] && request.state[options.cookieName][options.roleFieldName]) {
            cookieUserRole = request.state[options.cookieName][options.roleFieldName];
        }
        if (allowedRolesForRequest) {
            if (cookieUserRole) {
                allowedRolesForRequest.forEach(function (data) {
                    if (cookieUserRole && cookieUserRole.length) {
                        if (cookieUserRole.indexOf(data) !== -1) {
                            isAuthorized = true;
                        }
                    } else {
                        if (cookieUserRole === data) {
                            isAuthorized = true;
                        }
                    }
                });
            }
            if (!isAuthorized) {
                reply(Boom.unauthorized());
            }
        }
        reply.continue();
    });
    next();
};

exports.register.attributes = {
    pkg: require('../package.json')
};

