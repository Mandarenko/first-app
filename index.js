var express = require('express');
var app = express();
var url = "mongodb+srv://new-user_31:password211532@cluster0-mds5z.mongodb.net/test?retryWrites=true";
var mongoClient = require("mongodb").MongoClient;

app.get('/', function (req, res) {
    mongoClient.connect(url, function (err, client) {
        if (err) return;

        var db = client.db("usersdb");
        db.collection("records").findOne(function (err, doc) {
            res.send(doc);
        });
        client.close();
    });
});

app.listen(3000, function () {
    console.log('Listening on port 3000');
});