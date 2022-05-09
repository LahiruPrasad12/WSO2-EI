const GatewayController = require("../Controllers/GetwayController");

const router = require("express").Router();

router.post("/", GatewayController.makePayment);

module.exports = router;