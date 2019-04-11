var orm = require ("../config/orm.js");

var burger = {
    all: function(cb){
        orm.all("burger", function(res){
            cb(res);

            console.log("BURGER 2: " + res);
        });
    },
    insertOne: function(val, cb) {
        orm.insertOne(val, function(res) {
            // console.log(res);
            cb(res);
        });
    },
    updateOne: function(val, cb) {
        orm.updateOne(val, function(res) {
            // console.log(res);
            cb(res);
        });
    }
}

module.exports = burger;