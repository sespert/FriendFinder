var path = require("path");
var friends = require ("../data/friends");


module.exports = function(app) {

    //Display JSON of friends
    app.get("/api/friends", function(req,res){
        return res.json(friends);
        // res.send("testing");
    })

    //Post to add friends
    app.post("/api/friends", function(req, res){
        var newFriend =req.body;
        console.log(`New Friend: ${newFriend}`);
        friends.push(newFriend);
        res.json(newFriend);

        for (var i=0;i<friends.length;i++) {
            console.log("The compatib is " + arrayDiff(friends[i].scores,newFriend.scores));            
        }
    });

    function arrayDiff(arr1,arr2) {
        var diff= 0;
        var difArr = [];
        var sum = 0;
        for (var i=0;i<4;i++) {
            diff = arr1[i] - arr2[i];
            difArr.push(diff);
        }
        for (var i=0;i<4;i++) {
            if (difArr[i] >= 0) {
                sum = difArr[i] + sum;
            } else {
                sum = - difArr[i] + sum;
            }
        }
    }
}

