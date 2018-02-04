const usersController = require('../controllers').users;
const creservesController = require('../controllers').creserves;
const models = require('../models');
const jwt = require('jsonwebtoken');

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.post('/api/login', usersController.login);

  app.post('/api/users', usersController.create);
  app.get('/api/users', usersController.list);
  app.get('/api/users/:userId', usersController.retrieve);
  app.put('/api/users/:userId', usersController.update);
  app.delete('/api/users/:userId', usersController.destroy);

  app.post('/api/users/:userId/creserves', creservesController.create);
  app.put('/api/users/:userId/creserves/:creserveId', creservesController.update);
  app.delete(
    '/api/users/:userId/creserves/:creserveId', creservesController.destroy
  );

  // function verifyToken(req, res, next) {
  //   // Get auth header value
  //   const bearerHeader = req.headers['authorization'];
  //   // Check if bearer is undefined
  //   if (typeof bearerHeader !== 'undefined') {
  //     // Split at the space
  //     const bearer = bearerHeader.split(' ');
  //     // Get token from array
  //     const bearerToken = bearer[1];  
  //     // Set the token
  //     req.token = bearerToken;
  //     // Next middleware
  //     next();
  //   } else {
  //     // Forbidden
  //     res.sendStatus(403);
  //   }

  // }
  app.all('/api/users/:userId/creserves', (req, res) => res.status(405).send({
    message: 'Method Not Allowed',
  }));
};
