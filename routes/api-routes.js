var db = require("../models");

module.exports = function(app) {
    
    app.get("/api/burgers", function(req, res){
        db.burgers.findAll({})
        .then(function(result){
            res.json(result);
        });
    });

    app.put("/api/:id", function(req, res){
        db.burgers.update(
            {
            devoured: true
            },
            {
                where: {
                    id: req.params.id
                }
            }).then(function(result){
                res.json(result);
            });
    });

    app.post("/api/", function(req, res){
        db.burgers.create(req.body).then(function(result){
            res.json(result);
        });
    });
};