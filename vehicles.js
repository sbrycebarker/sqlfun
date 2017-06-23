module.exports = {


    index: function(req, res) {
      const db = req.app.get('db');
      db.vehiclequery().then(user => {
          res.status(200).json(user);
      })
    },
    show: function(req, res){
      const db = req.app.get('db')
      db.vehiclecount(req.params.userId).then(user =>{
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
    }

  }
