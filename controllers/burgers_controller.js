var express = require ("express");
var router = express.Router();

var burger = require("../models/burger.js");
//render all the burger to the DOM
router.get("/index", function(req, res){
    burger.all(function(data){
        console.log(data);
        res.render("index", {burger: data});
    });
});
//post add new burger;
router.post("/api/burger", function(req, res){
    burger.insertOne([req.body.burger], function(data){
        // console.log(req.body.burger);
        res.redirect("/index");
    });
});

router.get('/api/burger/:id', function(req, res){
    // console.log(req.params.id);
    burger.updateOne([req.params.id], function(data){
        res.redirect("/index");
    });
});




module.exports = router;

