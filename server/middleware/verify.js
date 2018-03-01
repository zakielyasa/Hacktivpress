const jwt = require('jsonwebtoken')

function isLogin(req, res, next){
    //console.log('ini req headers', req.headers.token)
    jwt.verify(req.headers.token, 'w5f45wf4', (err, decoded) => {
        //console.log('ini decoded',decoded)
        if(!err){
            //req.decoded = decoded
            req._id = decoded._id 
            //console.log('ini req decode', decoded)
            next()
        } else {
            res.send(err)
        }
    })
}

module.exports = {
    isLogin
}