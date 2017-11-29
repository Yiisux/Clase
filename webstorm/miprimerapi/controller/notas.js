/*const moongose = require('mongoose');
const Notas = mongoose.model('Nota');*/

const Nota = require('../models/notas');

module.exports.findAllNotas = (req, res) => {
  Nota.find((err, notas) => {
     if (err) res.status(500).jsonp({error: 500, mensaje: `${err.mensaje}`});

     res.status(200).jsonp(notas);
  });
};

module.exports.findById = (req, res) => {
    Nota.findById(req.params.id, (err, nota) => {
        if (err) res.status(404).json({error: 404, mensaje: "No existe una nota con ese ID"});

        res.status(200).jsonp(nota);
    });
};

module.exports.addNota = (req, res) => {
    let nuevaNota = new Nota({
        titulo: req.body.titulo,
        descripcion: req.body.descripcion
    });
    nuevaNota.save(function(err, nota){
        if (err) res.status(500).jsonp({error: 500, mensaje: `${err.mensaje}`});

        res.status(201).jsonp(nota);
    })
};

module.exports.editNota = (req, res) => {
    Nota.findById(req.params.id, (err, nota) => {
     nota.titulo = req.body.titulo;
     nota.descripcion = req.body.descripcion;

     nota.save((err) => {
         if (err) res.status(500).jsonp({error: 500, mensaje: `${err.mensaje}`});

         res.status(200).jsonp(nota);
     });
  });
};

module.exports.deleteNota = (req, res) => {
    nota.remove((err) => {
        Nota.findById(req.params.id, (err, nota) => {
            if (err) res.status(500).jsonp({error: 500, mensaje: `${err.mensaje}`});

            res.sendStatus(200);
        });
    });
};