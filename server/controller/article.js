const Article = require('../models/article')

let createArticle = (req, res) => {
    let objNewArticle = {
        author: req._id,
        title: req.body.title,
        content: req.body.content,
        category: req.body.category
    }
    Article.create(objNewArticle)
    .then(data => {
        res.send({
            message: 'Article created',
            data
        })
    })
    .catch(err => {
        res.send(err)
    })
}

let getAllArticle = (req, res) => {
    Article.find()
    .then(data => {
        res.send({
            message: 'List of article',
            data
        })
    })
    .catch(err => {
        res.send(err)
    })
}

let getMyArticle = (req, res) => {
    Article.find({author: req._id})
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.send(err)
    })
}

let deleteArticle = (req, res) => {
    Article.findByIdAndRemove({
        _id:req.params.id,
        author: req._id
    })
    .then(data => {
        res.send({
            message: 'Data deleted',
            data
        })
    })
    .catch(err => {
        res.send(err)
    })
}

let findAnArticle = (req, res) => {
    Article.findById(req.params.id)
    .then(data => {
        res.send({
            message: 'Find an article',
            data
        })
    })
    .catch(err => {
        res.send(err)
    })
}

let updateArticle = (req, res) => {
    let objUpdateArticle = {
        title: req.body.title,
        content : req.body.text,
        category: req.body.category
    }
    Article.findByIdAndUpdate({_id:req.params.id, author: req._id}, objUpdateArticle)
    .then(data => {
        res.send({
            message: 'Article updated',
            data
        })
        console.log(req.body)
    })
    .catch(err => {
        res.send(err)
    })
}

let findArticleCategory = (req, res) => {
    Article.findOne()
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.send(err)
    })
}

module.exports = {
    createArticle,
    getAllArticle,
    getMyArticle,
    deleteArticle,
    findAnArticle,
    updateArticle,
    findArticleCategory
}