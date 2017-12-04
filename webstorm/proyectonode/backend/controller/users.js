const bcrypt = require('bcrypt-nodejs');
const service = require('../services');
const User = require('../models/users');

// POST Nuevo usuario
module.exports.signUp = (req, res) => {

    let user = new User({
        email: req.body.email,
        nombre: req.body.nombre,
        password: req.body.password,
        grupo: req.body.grupo
    });

    user.save((err, result) => {
        if (err) return res.status(500).jsonp({error: 500, mensaje: `${err.message}`});

        return res.status(201).jsonp({
            token: service.createToken(user),
            nombre: result.nombre,
            email: result.email,
            avatar: result.avatar,
            grupo: result.grupo
        });
    });

}

module.exports.signIn = (req, res) => {

    User.findOne({email: req.body.email}).select('_id email +password ').exec((err, user) => {

            if (err) return res.status(401).jsonp({error: 401, mensaje: 'Error en la autenticación'});
            if (!user) return res.status(404).jsonp({error: 404, mensaje: 'No existe el usuario'});

            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (err) return res.status(401).jsonp({error: 401, mensaje: 'Error en la autenticación'});
                if (result == false)
                    return res.status(401).jsonp({error: 401, mensaje: 'Error en la autenticación'});
                else {
                    //TODO Posiblemente la tengamos que revisar
                    req.user = user;
                    res.status(200).jsonp({
                        mensaje: 'Login correcto',
                        token: service.createToken(user)
                    });
                }
            });


        });



}

module.exports.list = (req, res) =>  {

    User
        .find()
        //.select('_id nombre avatar')
        .select('_id nombre email password campania')
        .exec((err, result) => {

            if (err)
                return res
                    .status(500)
                    .jsonp({
                        error: 500,
                        mensaje: err.message
                    });

            if (result && result.length) {
                res.status(200).jsonp(result);
            } else {
                res.sendStatus(404);
            }



        });

}