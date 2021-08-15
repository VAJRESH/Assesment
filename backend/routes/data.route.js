const express = require("express");
const router = express.Router();

// controllers
const { getAllData } = require("../controllers/data.controller");

// api routes;
router.get("/getAll", getAllData);

module.exports = router;
