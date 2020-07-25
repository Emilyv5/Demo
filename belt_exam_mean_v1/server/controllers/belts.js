const mongoose = require("mongoose");

const models = require("../models/belt.js");

module.exports = {
    display: function(req, res) {
        models.Pet.find({})
            .collation({ locale: "en" })
            .sort({ type: 1 })
            .then((users) => res.json(users))
            .catch((err) => res.json(err));
    },

    add: function(req, res) {
        models.Pet.create(req.body)
            .then((useradd) => res.json(useradd))
            .catch((err) => res.json(err));
    },

    update: function(req, res) {
        models.Pet.update({ _id: req.params.id }, req.body, {
            runValidators: true,
        })
            .then((userdelete) => res.json(userdelete))
            .catch((err) => res.json(err));
    },

    getpet: function(req, res) {
        models.Pet.findOne({ _id: req.params.id })
            .then((users) => res.json(users))
            .catch((err) => res.json(err));
    },

    delete: function(req, res) {
        models.Pet.remove({ _id: req.params.id })
            .then((updated) => res.json(updated))
            .catch((err) => res.json(err));
    },
    register: function(req, res) {
        models.User.create(req.body)
            .then((uderadd) => res.json(useradd))
            .catch((err) => res.json(err));
    },
    addblog: function(req, res) {
        models.Blog.create(req.body)
            .then((item) => res.json(item))
            .catch((err) => res.json(err));
    },
};
