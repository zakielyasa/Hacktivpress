var User = require('../models/user')
var bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')

let register = (req, res) => {
    let objNewUser = {
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password)
    }
    User.create(objNewUser)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.send({
            message: err
        })
    })
}

let login = (req, res) => {
    let secretKey = 'q3r99ueof'
    User.findOne({username: req.body.username})
    .then(data => {
        let payload = {
            _id: data.id,
            username: data.username
        }
        let token = jwt.sign(payload, secretKey)
        res.send({
            token: token,
            message: 'Got Token!'
        })
    })
    .catch(err => {
        res.send(err)
    })
}

module.exports = {
    register,
    login
}