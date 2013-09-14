/*
 * Serve JSON to our AngularJS client
 */

/* Users */

exports.users = function (req, res) {  
  User.find({}, function (err, users) {
        res.json({
          users: users
        });
  });
};

exports.addUser = function (req, res) {
	var newUser = new User(req.body);
	newUser.save();
	console.log("user added: ", + req.body);
	res.json(req.body);
};

exports.editUser = function (req, res) {
  User.findByIdAndUpdate(req.params.id, { 
   	$set: { username: req.body.username, password: req.body.password }}, {upsert:true}, function (err, user) {
      return res.json(user);
    }
  );
};

exports.deleteUser = function (req, res) {
  User.remove({_id: req.params.id}, function (err) {
    if (!err) {
      console.log('no delete post error');
      res.json(true);
    }
    else {
      console.log('delete post error');
      res.json(false);
    }
  });
};

/* Locations */

exports.users = function (req, res) {  
  User.find({}, function (err, users) {
        res.json({
          users: users
        });
  });
};

exports.addLocation = function (req, res) {
	var newLocation = new Location(req.body);
	newLocation.save();
	console.log("location added: ", + req.body);
	res.json(req.body);
};

exports.editLocation = function (req, res) {
  Location.findByIdAndUpdate(req.params.id, { 
   	$set: { name: req.body.name, latitude: req.body.latitude, longitude: req.body.longitude }}, {upsert:true}, function (err, location) {
      return res.json(location);
    }
  );
};

exports.deleteLocation = function (req, res) {
  Location.remove({_id: req.params.id}, function (err) {
    if (!err) {
      console.log('no delete location error');
      res.json(true);
    }
    else {
      console.log('delete location error');
      res.json(false);
    }
  });
};