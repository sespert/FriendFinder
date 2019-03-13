var friends = require ("../data/friends.js");

module.exports = function(app) {
    //Display JSON of friends
    app.get("/api/friends", function(req,res){
        return res.json(friends);
        // res.send("testing");
    })

    // Post to add friends
    app.post("/api/friends", function(req, res){
        var newFr =req.body;
        friends.push(newFr);
       
        console.log("Length of array friends:" + friends.length);
        var arrComp = [];
        //Calculate the compatibility of the user with the friend database
        for (var i=0;i<(friends.length - 1);i++) {
            var indexNew = friends.length - 1;
            var eachComp = arrayDiff(friends[i].scores,friends[indexNew].scores);
            console.log("The compatib is " + eachComp);
            arrComp.push(eachComp);
        }
        console.log(arrComp);
        var bestIndex = calcComp(arrComp);
        console.log("Your best friend is " + friends[bestIndex].name);
        res.json(friends[bestIndex]);
       
    });

    //Helper function to calculate difference between the score arrays
    function arrayDiff(arr1,arr2) {
        var diff= 0;
        var difArr = [];
        var sum = 0;
        for (var i=0;i<arr1.length;i++) {
            diff = arr1[i] - arr2[i];
            difArr.push(diff);
        }
        for (var i=0;i<difArr.length;i++) {
            if (difArr[i] >= 0) {
                sum = difArr[i] + sum;
            } else {
                sum = - difArr[i] + sum;
            }
        }
    return sum;
    }

    //Helper function to calculate friend with most compatibility
    function calcComp (arr) {
        var mostComp = 41;
        var friendIndex;
        for (var i=0;i<arr.length;i++) {
            if (mostComp > arr[i]) {
                mostComp = arr[i];
                friendIndex = i;
            }      
        }
        return friendIndex;
    }
}

