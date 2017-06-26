module.exports = {


    index: function(req, res) {
      const db = req.app.get('db');
      db.vehiclequery().then(user => {
          res.status(200).json(user);
      })
    },
    show: function(req, res){
      const db = req.app.get('db')
      db.vehicleById(req.params.userId).then(user =>{
        var number = [];
        var count = {
          "count": user.length
        }
        number.push(count);
        console.log("res", number)
        res.status(200).json(number)
      })
    },
    create: function(req, res){
      const db = req.app.get('db');
      var car = req.body;
      db.addvehicle(car.make, car.model, car.year, car.owner_id).then(user => {
        res.status(200).json(user)
      })
    },
    vehicleQ: function(req, res) {

      const db = req.app.get('db')

      // console.log(req.query.userEmail)
      if (req.query.userEmail) {
      var email = req.query.userEmail
      db.usersByEmail(email).then(id=> {
        var id = id[0].id
        console.log("userbyemail", id)
        // console.log("userId", userId[0])
        db.vehicleById(id).then(vehicles =>{
          console.log("user id is ", id)
          console.log(vehicles)
          res.status(200).json(vehicles)
        })
      })
    } else {
      console.log(req.query.userFirstStart)
      db.byfirst(req.query.userFirstStart).then(data => {
        console.log("response", data)
        db.vehicleById(data[0].id).then(response => {
          res.status(200).json(response)
        })
      })
    }
  },
  year: function(req, res) {
    const db = req.app.get('db')
    var carsByYear = [];
    db.vehicleByYear().then(data => {
      for (var i = 0; i < data.length; i++) {
        var car = data[i];
        carsByYear.push(car)
        db.getUserById(car.owner_id).then(user=>{

        })
      }
      console.log(carsByYear)
    })

  }

  }
