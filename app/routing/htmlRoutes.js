

//Display the survey page
app.get("/survey", function(req,res){
    res.sendFile(path.join(__dirname, "survey.html"));
})