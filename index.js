const express = require('express');
const path = require('path');

const axios = require('axios');
const dotEnv = require('dotenv').config();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// const	apiAuthRouter = require('./server/routes/api/auth.js');
// const apiUsersRouter = require('./server/routes/api/users.js');

// var freckle = require('freckle');
// freckle('apitest', process.env.FRECKLE_API);
//
// freckle.users.list(function(err, users) {
//   if (err) {
//     throw new Error(err);
//   }
//
//   console.log(users);
// });

const app = express();
const port = process.env.PORT || 5000;

// freckle.users.show( 5543, function( err, user ) {
//   if( err ) {
//     throw new Error( err );
//   }
//
//   console.log( user );
// });


//----------
// log requests to STDOUT
app.use(morgan('dev'));

//----------
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//----------
// parse application/json
app.use(bodyParser.json());

//----------
// This is how we read the cookies sent over from the browser
app.use(cookieParser());

//----------
// set static file root folder
app.use(express.static(__dirname + '/client/public'));

//----------
// Freckle
let userId;

//----------
// API calls
app.get('/getprojects', (req, res) => {
  axios.get(`https://apitest.letsfreckle.com/api/projects.json?token=${process.env.FRECKLE_API}`)
    .then(response => {
      userId = response.data[0].project.account_id;
      res.send({
        response: response.data,
        userId: userId
      });
      console.log(response.data)
    }).catch(error => {
      // console.log(error);
    });
});

app.get('/getuser', (req, res) => {
  axios.get(`https://apitest.letsfreckle.com/api/users.json?token=${process.env.FRECKLE_API}`)
    .then(response => {
      res.send(response.data[0]);
      // console.log(response.data[0]);
    }).catch(error => {
      console.log(error);
    });
});

//----------
app.get('/home', function(req, res) {
  res.send('Home');
});

//----------
// TODO:
// app.use('/api/auth', apiAuthRouter);
// app.use('/api/users', apiUsersRouter);

//----------
app.listen(port, () => console.log(`Listening on port ${port}`));
