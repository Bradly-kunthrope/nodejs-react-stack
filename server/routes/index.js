const usersController = require('../controllers').users;
const creservesController = require('../controllers').creserves;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


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
  
  app.all('/api/users/:userId/creserves', (req, res) => res.status(405).send({
    message: 'Method Not Allowed',
  }));
};
