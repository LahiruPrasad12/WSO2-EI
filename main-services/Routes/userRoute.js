const express = require('express');
const productController = require('../Controllers/productController');
const authController = require('../Controllers/authController');
const userController = require("../Controllers/userController");
const router = express.Router();

//This api-resource route for update and delete specific student
router.route('/')
  .get(authController.protect,  productController.listProducts)

module.exports = router;