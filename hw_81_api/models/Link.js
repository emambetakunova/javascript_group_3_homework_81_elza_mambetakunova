const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LinkSchema = new Schema({
    shortURL: {
        type: String, required: true
    },
    originalURL: {
        type: String, required: true
    }
});

const Link = mongoose.model('Link', LinkSchema);
module.exports = Link;