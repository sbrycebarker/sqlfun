const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      massive = require('massive'),
      connectionString = 'postgres://postgres:1234a@localhost:3000/assessbox';

var app = express();

app.use(bodyParser.json())
app.use(cors());

// You need to complete the information below to connect
// to the assessbox database on your postgres server.

massive(connectionString).then(function(db) {
  app.set('db', dbInstance);
  // Initialize user table and vehicle table.
  dbInstance.init_tables.user_create_seed().then( response => {
    console.log('User table init');
    dbInstance.init_tables.vehicle_create_seed().then( response => {
      console.log('Vehicle table init');
    })
  })
})


// ===== Build enpoints below ============

var users = require('./mainCtrl')

app.get('/api/users', users.index )
// app.get('/api/vehicles')
//
// app.post('/api/users')
//
// app.post('/api/vehicles')
//
// app.get('/api/user/:userId/vehiclecount')
//
// app.get('/api/user/:userId/vehicles')
//
// app.get('/api/user/:userId/vehicle')
//
// app.get('/api/vehicle')
//
// app.get('/api/newervehiclesbyyear')
//
// app.put('/api/vehicle/:vehicleId/user/:userId')
//
// app.delete('/api/user/:userId/vehicle/:vehicleId')
//
// app.delete('/api/vehicle/:vehicleId')



// ===== Do not change port ===============
const port = 3000;
app.listen(port, () => {
  console.log('Listening on port ', port);
})
