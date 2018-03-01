var mongoose = require('mongoose')
var Schema = mongoose.Schema

var articlesSchema = new Schema({
    title: String,
    content: String,
    category: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

var Articles = mongoose.model('articles', articlesSchema)

module.exports = Articles