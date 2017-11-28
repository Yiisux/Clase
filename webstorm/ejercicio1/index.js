let mongoose = require('mongoose');
mongoose.connect('mongodb://192.168.99.100:27017/test', { useMongoClient: true });
mongoose.Promise = global.Promise;

var Productos = mongoose.model('Producto', { name: String,descripcion: String, url: String, precio: String });


var listadoProductos = [new Productos({ name: 'Queso', descripcion: 'Queso curado', url: 'https://www.cocinista.es/download/bancorecursos/recetas/hacer-queso-duro.jpg', precio: 24 }),
                        new Productos({name: 'Fresa', descripcion: 'Fresa de huelva', url: 'http://media.mercola.com/assets/images/foodfacts/strawberry-nutrition-facts.jpg', precio: 3 }),
                        new Productos({name: 'Jamon serrano', descripcion: 'Jamon serrano Bone-in', url: 'https://images.tienda.com/is/image/LaTienda/j-jm-49?wid=480&qlt=60', precio: 125}),
                        new Productos({name: 'Almendras', descripcion: 'Almendras marca sales', url: 'https://mejorconsalud.com/wp-content/uploads/2013/07/50-1.jpg', precio: 1}),
                        new Productos({name: 'Patata nueva', descripcion: 'Patatas nuevas de chipiona', url: 'http://patatasmorales.es/wp-content/uploads/2016/05/Patata-nueva-300x276.jpg', precio: 0.50}),
                        new Productos({name: 'Castaña', descripcion: 'Castaña de constantina', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/C._sat-nux-1.jpg/251px-C._sat-nux-1.jpg', precio: 4.5}),
                        new Productos({name: 'Manzana golden', descripcion: 'Manzana dulce', url: 'http://lasmanzanas.net/wp-content/uploads/2016/04/manzana-golden-300x300.png', precio: 1.7}),
                        new Productos({name: 'Pera conferencia', descripcion: 'Peras de conferencia enteras', url: 'https://www.nogalfruits.es/wp-content/uploads/2014/01/pera-conferencia.png', precio: 1.5}),
                        new Productos({name: 'Limon', descripcion: 'limon de 1º', url: 'http://misremedios.com/wp-content/uploads/2015/10/Limon-300x200.jpg', precio: 1.8}),
                        new Productos({name: 'Zanahoria', descripcion: 'Zanahoria de campo', url: 'https://biotrendies.com/wp-content/uploads/2015/07/zanahoria.jpg', precio: 0.8})];

for (i = 0; i < listadoProductos.length; i++){
    listadoProductos[i].save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Productos guardados');
        }
    });
}

Productos.find({}, (err, results) => {
    if (err) return console.error(err);
    console.log(results)
});