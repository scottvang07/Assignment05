/**
 * Created by Scott on 3/29/2017.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var bookModel = new Schema({
    title: {
        type: String
    },
    author: {type: String},
    genre: {type: String},
    read: {type: Boolean, default:false}
});

module.exports= mongoose.model('Book', bookModel);