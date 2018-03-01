const mongoose = require('mongoose')
let Schema = mongoose.Schema

let articleSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: String,
    content: String,
    category: String,
})

let Article = mongoose.model('article', articleSchema)

module.exports = Article