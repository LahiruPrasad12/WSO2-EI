const { model, Schema } = require("mongoose");

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a valid product name"],
    },
    image: {
      type: String,
    },
    description: {
      type: String,
      required: [true, "Please enter a valid product description"],
    },
    category: {
      type: String,
      enum: ['A', 'B','C','D'],
      required: [true, "Please enter a valid product category"],
    },
    price: {
      type: Number,
      required: [true, "Please enter a valid product price"],
    },
    sku: {
      type: String,
      required: [true, "Please enter a valid product sku"],
    },
    size: {
      type: String,
      required: [true, "Please enter a valid product size"],
    },
    stock: {
      type: Number,
      required: [true, "Please enter a valid product name"],
    },
  },
  { timestamps: true }
);

productSchema.index({ name: "text", description: "text" });

module.exports = model("product", productSchema);
