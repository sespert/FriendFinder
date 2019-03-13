//Dependencies required for the server
var express = require("express");
var path = require("path");

//Sets up the express server
var app = express();
var PORT = process.env.PORT || 3030;

//Sets up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Routes
//--------------------------------------------------
// app.get("/", function(req,res){
//     res.send("testing");
// });

//Include api routes in the server file
require("./app/routing/apiRoutes")(app);

//Include htmlRoutes in the server file
require("./app/routing/htmlRoutes")(app);



//The server starts listening
app.listen(PORT, function(){
    console.log("Server started on http://localhost:" + PORT);
})

