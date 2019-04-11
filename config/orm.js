var connection = require("./connection.js");

var orm = {
    all: function (tableInput, cb) {
        var queryString = `SELECT * FROM ${tableInput}`;
        console.log(queryString);
        connection.query(queryString, function (err, data) {
            if (err) throw err;
            console.log("ORM " + data);
            cb(data);
        });
    },
    //INSERT INTO table SET (name ) VALUES ()
    //INSERT INTO ?? set 
    insertOne: function (val, cb) {
        var queryString = `INSERT INTO burger (name) VALUES ?`;
        connection.query(queryString, [[val]], function (err, results) {
            if (err) throw err;
            console.log(results);
            cb(results);
        });
    },

    //INSERT INTO table SET (name ) VALUES ()
    //INSERT INTO ?? set 
    updateOne: function (val, cb) {
        var queryString = `UPDATE burger SET devoured=1 WHERE ${val}`;
        connection.query(queryString, function (err, results) {
            if (err) throw err;
            console.log(results);
            cb(results);
        });
    }
}
module.exports = orm;
//SELECT * FROM burger