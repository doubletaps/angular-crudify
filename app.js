var mongoose = require('mongoose');
var express = require('express');
var crudify = require('./node_modules/crudify');
var routes = require('./routes');

// Create the db connection
var db = mongoose.createConnection('mongodb://localhost/apitest');

// Create our schemas
var Schema = require('mongoose').Schema;
var UserSchema = new mongoose.Schema({
  username: {
      type: String,
      required: true
  },
  password: {
      type: String
  }
});

var LocationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  }
});

var MovieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  location: {
    type: Schema.ObjectId,
    ref: 'Location',
    required: true
  },
  imgUrl: {
    type: String
  }
});

// Add the model into db
var User =      db.model('User', UserSchema);
var Location =  db.model('Location', LocationSchema);
var Movie =     db.model('Movie', MovieSchema);

// Create the HTTP server
var app = express();
app.use(express.bodyParser());


// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/public'));
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/partials/:name', routes.partials);


// Expose our models from the database and add it to the HTTP server
var api = crudify(db);
api.expose('User');
api.expose('Location');
api.expose('Movie');
api.hook(app);

// Listen to port 8080
app.listen(8080);

console.log("Server listening on 8080");