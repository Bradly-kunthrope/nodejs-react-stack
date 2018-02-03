const User = require('../models').User;
const Creserve = require('../models').Creserve;

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
};
