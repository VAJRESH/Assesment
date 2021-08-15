const Data = require("../models/data.model");

exports.getAllData = (req, res) => {
  Data.find({}).exec((err, data) => {
    if (err) return res.status(400).json({ error: err });

    return res.json({ message: `Total ${data.length} documents found`, data });
  });
};
