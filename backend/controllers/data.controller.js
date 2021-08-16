const Data = require("../models/data.model");

exports.getAllData = (req, res) => {
  let { limit, skip } = req.query;

  // convert to numbers because only numbers are accepted as parameters
  limit = +limit || 50;
  skip = +skip || 0;

  Data.find({}).exec((err, data) => {
    if (err) return res.status(400).json({ error: err });

    const list = data.slice(skip, limit + skip);
    return res.json({ list, total: data.length });
  });
};
