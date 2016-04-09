var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.render('./../app/index.ejs', {});
})
.use(express.static(__dirname + '/../.tmp'))
.listen(7777);
