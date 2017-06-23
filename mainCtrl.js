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
      res.status(200).json(res)
    }

  }
