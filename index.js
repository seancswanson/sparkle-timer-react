const express = require('express');
const path = require('path');

const dotEnv = require('dotenv').config();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// const	apiAuthRouter = require('./server/routes/api/auth.js');
// const apiUsersRouter = require('./server/routes/api/users.js');

const app = express();
const port = process.env.PORT || 5000;


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

//----------
// API calls
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

//----------
app.get('/', function(req, res) {
  console.log('Home');
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

//----------
// TODO:
// app.use('/api/auth', apiAuthRouter);
// app.use('/api/users', apiUsersRouter);

//----------
app.listen(port, () => console.log(`Listening on port ${port}`));
