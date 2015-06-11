"use strict";

var Joi = require('joi');

//Routs Lists
module.exports = [
    {
        path: '/login',
        method: ['POST'],
        config: {
            description: 'Login Here',
            notes: 'Do login here',
            tags: ['api'],
            cors: true,
            handler: function (request, reply) {

                //To Authenticate User
                request.auth.session.set({roles: ['user'], password: 'pioneer'});
                sharedService.emit("someEvent", {name: 'kashish'});
                reply('successfully login');

            }
        }
    }
];