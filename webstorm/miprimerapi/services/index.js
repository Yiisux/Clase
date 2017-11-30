
const jwt = require('jwt-simple');
const bcrypt = require('bcrypt-nodejs');
const moment = require('moment');
const config = require('../config');

module.exports.createToken = (user) => {
  const payLoad = {
      sub: user._id,
      iat: moment().unix(),
      exp: moment().add(14, 'days').unix()
  }

  return jwt.encode(payLoad, config.SECRET_TOKEN);
};

module.exports.decodeToken = (token) => {
    const decode = new Promise((res, rej) => {
       try {
            const payLoad = jwt.decode(token, config.SECRET_TOKEN);

            if (payLoad.exp <= moment().unix()) {
                rej({status: 401, mensaje: 'El token ha expirado'})
            }else{
                res(payLoad.sub);
            }
       } catch (err) {
            rej({
               status: 500,
               mensaje: 'El token no es válido'
            });
       }
    });
}