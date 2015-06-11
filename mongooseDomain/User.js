"use strict";

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//Define User Schema
//Refer: http://mongoosejs.com/docs/schematypes.html
module.exports = {
    username: String,
    password: String
};