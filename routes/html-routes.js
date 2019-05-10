var db = require("../models")

module.exports = function(app){
        //homepage load
      app.get("/", function(req, res){
        var burgers;
        db.burgers.findAll({}).then(function(result){
            burgers = {burgers: result}
            res.render("index", burgers);
        });
    });
};