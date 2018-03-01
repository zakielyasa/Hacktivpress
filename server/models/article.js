var mongoose = require('mongoose')
var Schema = mongoose.Schema

var articleSchema = new Schema({
    title: String,
    content: String,
    category: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

var Article = mongoose.model('article', articlesSchema)

module.exports = Article