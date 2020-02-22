// Dependencies


var db = require('../models');


// Routs
module.exports = function (app) {
app.get('/', function (req, res) {
    db.Burgers.findAll({})
        .then(function (burgerdata) {
            var object = {
                burgers: burgerdata,
            }
            return res.render('index', object);
        });
});

app.post('/api/burgers', function (req, res) {
    db.Burgers.create({
            burger_name: req.body.name
        })
        .then(function (burger) {
            res.json(true);
        })
});

app.put('/api/burgers/:id', function (req, res) {
    var id = req.params.id;

    db.Burgers.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(function (burger) {
            burger.updateAttributes({
                devoured: true,
            }).then(function(){
                res.json(true)
            });
        });
});


app.delete('/api/burgers', function (req, res) {
    db.Burgers.destroy({
        where: {},
    }).then(function(){
        res.json(true)
    });
});
}