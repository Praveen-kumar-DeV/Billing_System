const express = require("express");

const router = express.Router();

const {list} = require("../controllers/orderControllers");

router.route("/").get(list);

module.exports= router;