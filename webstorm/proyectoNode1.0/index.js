let mongoose = require('mongoose');
mongoose.connect('mongodb://192.168.99.100:27017/test', { useMongoClient: true });
mongoose.Promise = global.Promise;

var catSchema = mongoose.Schema({
   name: String
});

var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({ name: 'Zildjian' });
kitty.save(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('meow');
    }
});