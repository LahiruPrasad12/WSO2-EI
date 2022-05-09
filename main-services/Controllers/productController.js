const Product = require("../Models/productModel");
const Filters = require("../Utils/filters");
const User = require("../Models/userModel");

// list all the products
exports.listProducts = async (req, res) => {
  try {
    const Respond = new Filters(Product.find(), req.query).filter().sort().limitFields().paginate();
    const products = await Respond.query;
    return res.status(200).json(products);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Error when retrieving products" });
  }
};

// find product based on id
exports.findProduct = async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    if (product) return res.status(200).json(product);
    else return res.status(400).json({ message: "Product not found" });
  } catch (error) {
    console.error(error);
    return res.status(400).json(error);
  }
};

// create / update a product
exports.saveProduct = async (req, res) => {
  try {
    const new_product = await Product.create(req.body)
    return res.status(200).json({
      message: "Product was saved successfully",
      product: new_product._doc,
    });

  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: error.message});
  }
};


exports.updateProduct = async (req, res) => {
  try {
    const updated_product = await Product.findByIdAndUpdate(req.params.id, req.body)
    return res.status(200).json({
      message: "Product was updated successfully",
      product: updated_product._doc,
    });

  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: error.message});
  }
};



// delete a product
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    return res
      .status(200)
      .json({ message: "Product was deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(400).json(error);
  }
};
