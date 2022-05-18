const GatewayController = require("../Controller/GetwayController");

const router = require("express").Router();

router.post("/", GatewayController.sendSMS);

module.exports = router;