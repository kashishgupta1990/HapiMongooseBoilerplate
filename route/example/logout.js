"use strict";

var Joi = require('joi');

//Routs Lists
module.exports = [
    {
        path: '/logout',
        method: ['POST'],
        config: {
            description: 'Login Here',
            notes: 'Do login here',
            tags: ['api'],
            cors: true,
            handler: function (request, reply) {

                //To Authenticate User
                request.auth.session.clear();
                reply('logout successfully');

            }
        }
    }
];