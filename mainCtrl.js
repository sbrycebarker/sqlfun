module.exports = {

  index: function(req, res) {
      var dbInstance = req.app.get('db');
      dbInstance.userquery().then(users => {
          res.status(200).json(users);
      })
    },
  create: function(req, res) {
    var dbInstance = req.app.get('db');
    console.log(req.body)
    dbInstance.addUser(req.body.name, req.body.email).then(function(users){
      res.status(200).json(users)
      })
    },
    owned: function(req, res) {
      var dbInstance = req.app.get('db');
    dbInstance.vehicleById(req.params.userId).then(users => {
      console.log(users)
      // users.push(req.params)
      res.status(200).json(users);
    })
    }

  }
