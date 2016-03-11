var express = require("express");
var app = express();
var PORT = 8080;
var mongojs = require("mongojs")
var db = mongojs("zoo", ["animals"]);

app.use(express.static("public"));

app.get('/all', function(req, res){
  res.send(index.html);
});
app.get('/weight', function(req,res){
  db.animals.find({}, function(err, documents){
    if(err){
      console.log(err);
    }else {
      res.json(documents);
    }
  });
});
app.get('/animals', function(req,res){
  db.animals.find().sort({weight: -1}, function(err, documents){
    if(err){
      console.log(err);
    }else {
      res.json(documents);
    }
  })
});
app.listen(PORT, function(){
  console.log("listening on port %s", PORT);
});
