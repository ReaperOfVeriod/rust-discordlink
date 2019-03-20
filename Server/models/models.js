'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ShitSchema = new Schema({
    DiscordID: {
        type: String,
        required: 'discord ID missing'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    SteamID: {
        type: String
    }
});

module.exports = mongoose.model('Shit', ShitSchema);