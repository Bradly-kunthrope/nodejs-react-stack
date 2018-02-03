const Creserve = require('../models').Creserve;

module.exports = {
  create(req, res) {
    return Creserve
      .create(
        {
          r_date_start: req.body.r_date_start,
          r_date_end: req.body.r_date_end,
          classroom_cl: req.body.classroom_cl,
          subject_taught: req.body.subject_taught,
          department: req.body.subject_taught,
          year_level_taught: req.body.year_level_taught,
          userId: req.params.userId
        }
      )
      .then(creserve => res.status(201).json(creserve))
      .catch(error => res.status(500).json(error));
  },

  update(req, res) {
    return Creserve
      .findOne({
        where: {
          id: req.params.creserveId,
          userId: req.params.userId,
        },
      })
      .then(creserve => {
        if (!creserve) {
          return res.status(404).json({
            message: 'Creserve Not Found',
          });
        }
        return creserve
          .update(
            {
            r_date_start: req.body.r_date_start || creserve.r_date_start,
            r_date_end: req.body.r_date_end || creserve.r_date_end,
            classroom_cl: req.body.classroom_cl || creserve.classroom_cl,
            subject_taught: req.body.subject_taught || creserve.subject_taught,
            department: req.body.department || creserve.department,
            year_level_taught: req.body.year_level_taught || creserve.year_level_taught
           })
          .then(updatedCreserve => res.status(200).json(updatedCreserve))
          .catch(error => res.status(500).json(error));
      })
      .catch(error => res.status(500).json(error));
  },

  destroy(req, res) {
    return Creserve
      .find({
        where: {
          id: req.params.creserveId,
          userId: req.params.userId,
        },
      })
      .then(creserve => {
        if (!creserve) {
          return res.status(404).json({
            message: 'Creserve Not Found',
          });
        }

        return creserve
          .destroy()
          .then(() => res.status(204).json())
          .catch(error => res.status(500).json(error));
      })
      .catch(error => res.status(500).json(error));
  },
};
