const User = require('../models').User;
const Creserve = require('../models').Creserve;
const jwt = require('jsonwebtoken');

module.exports = {
  create(req, res) {
    return User
      .create(req.body, { fields: Object.keys(req.body) })
      .then((user) => res.status(201).json(user))
      .catch((error) => res.status(500).json(error));
  },

  list(req, res) {
    return User
      .findAll({
        include: [{
          model: Creserve,
          as: 'Creserves',
        }],
      })
      .then(users => res.status(200).json(users))
      .catch(error => res.status(500).json(error));
  },
  retrieve(req, res) {
    return User
      .findById(req.params.userId, {
        include: [{
          model: Creserve,
          as: 'Creserves',
        }],
      })
      .then((user) => {
        if (!user) {
          return res.status(404).json({
            message: 'User Not Found',
          });
        }
        return res.status(200).json(user);
      })
      .catch((error) => res.status(500).json(error));
  },
  login(req, res) {
    return User.findOne({
      where: {
        username: req.body.username,
        password: req.body.password
      },

    })
    .then(user => {
      if (!user){
        return res.status(404).json({
          message: 'login again',
        });
      }
      return jwt.sign({ user }, 'secretkey', { expiresIn: '30s' }, (err, token) => {
        res.json({
          token
        });
      });
    }
      )
      .catch((error) => res.status(500).json(error));
      },

  update(req, res) {
    return User
      .findById(req.params.userId, {
        include: [{
          model: Creserve,
          as: 'creserves',
        }],
      })
      .then(user => {
        if (!user) {
          return res.status(404).json({
            message: 'User Not Found',
          });
        }
        return user
          .update(req.body, { fields: Object.keys(req.body) })
          .then(() => res.status(200).json(user))
          .catch((error) => res.status(500).json(error));
      })
      .catch((error) => res.status(500).json(error));
  },

  destroy(req, res) {
    return User
      .findById(req.params.userId)
      .then(user => {
        if (!user) {
          return res.status(500).json({
            message: 'Todo Not Found',
          });
        }
        return user
          .destroy()
          .then(() => res.status(204).json())
          .catch((error) => res.status(500).json(error));
      })
      .catch((error) => res.status(500).json(error));
  },
  verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers['authorization'];
  // Check if bearer is undefined
  if (typeof bearerHeader !== 'undefined') {
    // Split at the space
    const bearer = bearerHeader.split(' ');
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }

}
};
