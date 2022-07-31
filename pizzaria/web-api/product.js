var mongoose = require('mongoose');
var $chema = mongoose.Schema

var product$chema = new $chema({
    name: String,
    price: Number,
    available: Boolean,
}, {versionKey: false});

module.exports = mongoose.model("Product", product$chema);