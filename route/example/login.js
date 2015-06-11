"use strict";

var Joi = require('joi');
var service = {
    login:require('../../service/example/login.service')
};

//Routs Lists
module.exports = [
    {
        path: '/login',
        method: ['POST'],
        config: {
            description: 'Login Here',
            notes: 'Do login here',
            tags: ['api'],
            handler: function (request, reply) {

                //To Authenticate User
                request.auth.session.set({roles: ['user'], password: 'pioneer'});
                globalEvent.emit("someEvent", {name: 'kashish'});
                service.login.login();
                reply('successfully login');

            }
        }
    }
];