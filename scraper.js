var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');
var PORT = 3000;
var mongojs = require('mongojs');
var databaseUrl = "scraper";
var collections = ['scraperData'];
var db = mongojs(databaseUrl, collections);
db.on('error', function(err){
  console.log('Database Error:', err);
});

app.get('/', function(req, res){
  res.send('Hello World!');
});
app.get('/scraper', function(req, res){
  console.log("this worked!");
  //da scrape
  res.send('scrape complete!');
});

app.listen(PORT, function(){
  console.log('App running on port %s!', PORT);
});
