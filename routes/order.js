const express = require("express");

const router = express.Router();

const {orders} = require("../controllers/orderControllers");

router.route("/").post(orders);

module.exports= router;