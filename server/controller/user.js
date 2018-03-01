const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt  = require('bcryptjs')

let createUser = (req, res) => {
    let objNewUser = {
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password)
    }
    User.create(objNewUser)
    .then(data => {
        res.send({
            message: 'User created',
            data
        })
    })
    .catch(err => {
        res.send(err)
    })
}

let findAllUser = (req, res) => {
    User.find()
    .then(data => {
        res.send({data})
    })
    .catch(err => {
        res.send(err)
    })
}


let login = (req, res) => {
    let jwtSecret = 'w5f45wf4'
    User.findOne({
        username: req.body.username,
    })
    .then(data => {
        let payload = {
            _id: data.id,
            username: data.username,
        }
        let token = jwt.sign(payload, jwtSecret)
        res.send({
            token: token,
            message: 'Got token'
        })
    })
    .catch(err => {
        res.send(err)
    })
}

module.exports = {
    createUser,
    findAllUser,
    login
}