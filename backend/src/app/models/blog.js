const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const Blog = new Schema({
    ID: {type: String, maxLength: 10, required: true, unique: true },
    name: { type: String, maxLength: 100, required: true },
    description: { type: String},
    image: { type: String, maxLength: 200 },
    author: { type: String, maxLength: 100},
}, {collection: 'posts'});

module.exports = mongoose.model('Blog', Blog);