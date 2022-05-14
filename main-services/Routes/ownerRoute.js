const express = require('express');
const productController = require('../Controllers/productController');
const authController = require('../Controllers/authController');
const userController = require("../Controllers/userController");
const router = express.Router();

//This api-resource route for update and delete specific student
router.route('/')
  .get(authController.protect, authController.restrictTo('owner'), productController.listMyProducts)
  .post(authController.protect, authController.restrictTo('owner'),productController.uploadProductPhoto, productController.saveProduct);

//This api-resource route for update and delete specific student
router.route('/:id')
  .get(authController.protect,authController.restrictTo('owner'), productController.findProduct)
  .patch(authController.protect,authController.restrictTo('owner'), productController.updateProduct)
  .delete(authController.protect,authController.restrictTo('owner'), productController.deleteProduct)


module.exports = router;