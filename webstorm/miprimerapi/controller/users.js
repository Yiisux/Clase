
const brcypt = require('bcrypt-nodejs');
const User = require('../models/users');
const service = require('../services');


//POST nuevo usuario
module.exports.singUp = (req, res) => {
  let user = new User({
      email: req.body.email,
      displayName: req.body.displayName,
      password: req.body.password
  });

  user.save((err, result) => {
      if (err) res.status(500).jsonp({error: 500, mensaje: `${err.mensaje}`});

      return res.status(201).jsonp({
         token: service.createToken(user),
         displayName: result.displayName,
         email: result.email,
         avatar: result.avatar
      });
  });
};

module.exports.singIn = (req, res) => {
  User.findOne({email: req.body.email}).select('_id email +password').exec((err, user) => {
      if (err) return res.status(401).jsonp({error: 401, mensaje: 'Error en la autenticacion'});
      if (!user) return res.status(404).jsonp({error: 404, mensaje: 'No existe el usuario'});

      brcypt.compare(req.body.password, user.password, (err, result) => {
          if (err) return res.status(401).jsonp({error: 401, mensaje: 'Error en la autenticacion'});
          if (result == false) return res.status(401).jsonp({error: 401, mensaje: 'Error en la autenticacion'});
          else{
              req.user = user;
              res.status(200).jsonp({mensaje: 'Login correcto', token: service.createToken(user)});
          }
      });

  });
};