//////requirements//////
var express = require('express');
var app = express();
var port = process.env.PORT || 3232;

app.use(express.static(__dirname + "/docroot"));


app.listen(port, function(){
    console.log("Now listening on port " + port);
})
