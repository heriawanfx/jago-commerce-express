const db = require("../models");

const Banner = db.banners;

exports.findAll = (req, res) => {
    Banner.findAll()
      .then((books) => {
        res.json({
          data: books,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: err.message || "Some error occurred while retrieving data.",
          data: null,
        });
      });
  };