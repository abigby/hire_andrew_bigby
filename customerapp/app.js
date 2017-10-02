var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();


// var logger = function(request, response, next) {
//   console.log('Logging...');
//   next();
// }
// app.use(logger);

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));
var person = {
  name: 'Jeff',
  age: 30
}
app.get('/', function(request, response){
  response.json(person)
});
app.listen(3000, function(){
  console.log('Server started on Port 3000....');
});
