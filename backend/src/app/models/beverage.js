const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Beverage = new Schema({
    ID: {type: String, maxLength: 10, required: true, unique: true },
    name: { type: String, maxLength: 100, required: true },
    description: { type: String},
    image: { type: String, maxLength: 200 },
}, {collection: 'Beverages'});


module.exports = mongoose.model('Beverage', Beverage);