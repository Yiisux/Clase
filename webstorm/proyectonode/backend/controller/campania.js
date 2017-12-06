const Campania = require('../models/campania');
const User = require('../models/users');

module.exports.findAllCampanias = (req, res) => {
    Campania.find((err, campanias) => {
        if (err) res.status(500).jsonp({error: 500, mensaje: `${err.mensaje}`});

        res.status(200).jsonp(campanias);
    });
};

module.exports.findOne = (req, res) => {
    Campania.findOne(req.params.clave, (err, campania) => {
        if (err) return res.status(404).jsonp({error: 404, mensaje: 'No existe una campaña que use esa clave'});

        User.populate(campania, {
            path: 'usuarios',
            select: '_id nombre email avatar'
        }, (err, campania) => {
            res.status(201).jsonp(campania);
        });

    });
};

module.exports.addUsuario = (req, res) => {

    Campania.findOne({clave: req.body.clave}, function (err, campania) {
        if (err) res.status(500).jsonp({error: 500, mensaje: `${err.mensaje}`});

        User.update({_id: req.user}, {$push: {campania: campania}}, function (err) {
            if (err) res.status(500).jsonp({error: 500, mensaje: `${err.mensaje}`});

            res.status(200).jsonp(campania);
        });
    });
}