const User = require("../models/user.model");

module.exports.findAllUsers = (req, res) => {
  User.find()

    .then((allDaUsers) => {
      res.json(allDaUsers);
    })

    .catch((err) => {
      res.json(err);
    });
};

module.exports.findOneSingleUser = (req, res) => {
  User.findOne({ _id: req.params.id })

    .then((oneSingleUser) => {
      res.json(oneSingleUser);
    })

    .catch((err) => {
      res.json(err);
    });
};

module.exports.createNewUser = (req, res) => {
  User.create(req.body)

    .then((newlyCreatedUser) => {
      res.json({ user: newlyCreatedUser });
    })

    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.updateExistingUser = (req, res) => {
  User.findOneAndUpdate(
    { _id: req.params.id },

    req.body,

    { new: true, runValidators: true }
  )

    .then((updatedUser) => {
      res.json(updatedUser);
    })

    .catch((err) => {
      res.json(err);
    });
};

module.exports.deleteAnExistingUser = (req, res) => {
  User.deleteOne({ _id: req.params.id })

    .then((result) => {
      res.json(result);
    })

    .catch((err) => {
      res.json(err);
    });
};
