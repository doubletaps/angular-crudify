var mongoose = require('mongoose');
var express = require('express');
var crudify = require('./node_modules/crudify');
var routes = require('./routes');

// Create the db connection
var db = mongoose.createConnection('mongodb://localhost/apitest');

// Create our schema
var UserSchema = new mongoose.Schema({
  username: {
      type: String,
      required: true
  },
  password: {
      type: String
  }
});

// Add the model into db
var User = db.model('User', UserSchema);

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
api.hook(app);

// app.get('/api/users', api.users);
// app.post('/api/user', api.addUser);
// app.delete('/api/user/:id', api.deleteUser);

// Listen to port 8080
app.listen(8080);

console.log("Server listening on 8080");