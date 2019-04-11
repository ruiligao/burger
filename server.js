var express = require ("express");
var app = express();
var PORT = process.env.PORT || 4000;


app.use(express.urlencoded({extended: true}));
app.use(express.json());

var exphbs = require ("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
app.use(express.static("public"));

var router = require ("./controllers/burgers_controller")
app.use(router);

app.listen(PORT, function(){
    console.log("Server is listening on http://localhost:" +PORT);
});