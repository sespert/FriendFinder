var path = require("path");

module.exports = function(app) {
    //Display home page
    app.get("/", function(req,res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    //Display the survey page
    app.get("/survey", function(req,res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
}

