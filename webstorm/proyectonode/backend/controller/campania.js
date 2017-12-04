const Campania = require('../models/campania');
const User = require('../models/users');

module.exports.findAllCampanias = (req, res) => {
    Campania.find((err, campanias) => {
        if (err) res.status(500).jsonp({error: 500, mensaje: `${err.mensaje}`});

        res.status(200).jsonp(campanias);
    });
};

module.exports.findById = (req, res) => {
    Campania.findById(req.params.id, (err, campania) => {
        if (err) return res.status(404).jsonp({error: 404, mensaje: 'No existe una campaña con ese ID'});

        User.populate(campania, {
            path: 'usuarios',
            select: '_id nombre email avatar'
        }, (err, nota) => {
            res.status(201).jsonp(campania);
        });

    });
}

module.exports.addUsuario = (req, res) => {
    Campania.findById(req.params.id, function (err, campania) {


        agregarUsuario.update(function (err, campania) {
            if (err) res.status(500).jsonp({error: 500, mensaje: `${err.mensaje}`});

            User.populate(campania, {
               path: 'usuarios',
               select: '_id nombre email avatar'
            }, (err, nota) => {
                res.status(201).jsonp(campania);
            });
        });
    });
}