const express = require("express");
const router = express.Router();

// controllers
const { uploadData } = require("../controllers/upload.controller");

// api routes;
router.post("/", uploadData);

module.exports = router;
