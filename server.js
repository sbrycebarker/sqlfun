const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      cors = require('cors');
      connectionString = "postgres://postgres:1234a@localhost/sqlfun";

var app = module.exports = express();

app.use(bodyParser.json())
app.use(cors());

// You need to complete the information below to connect
massive(connectionString).then(function(instance) {
    app.set('db', instance);
    // Initialize user table and vehicle table.
    instance.createUser().then( function(response) {

      console.log('Users table init ready');

    instance.createItem().then( function(response) {
      console.log('Vehicles table init ready');
    })
    })
})


var users = require('./mainCtrl')
var vehicles = require('./vehicles')
//
app.get('/api/users', users.index )
app.get('/api/vehicles', vehicles.index)
//
app.post('/api/users', users.create)

app.post('/api/vehicles', vehicles.create)

app.get('/api/user/:userId/vehiclecount', vehicles.show)

app.get('/api/user/:userId/vehicle', users.owned )

app.get('/api/vehicle', vehicles.vehicleQ)
//
app.get('/api/newervehiclesbyyear', vehicles.year)
//
// app.put('/api/vehicle/:vehicleId/user/:userId')
//
// app.delete('/api/user/:userId/vehicle/:vehicleId')
//
// app.delete('/api/vehicle/:vehicleId')



// ===== Do not change port ===============
const post = 3000
app.listen( post , function(){
  console.log("Successfully listening on " + post)
})
