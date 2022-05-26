const {model, Schema} = require("mongoose");
const mongoose = require("mongoose");

const orderSchema = new Schema(
    {
        owner_id: {
            type: String,
            required: [true, "Please enter a valid product name"],
        },
        item: {
            type: Object,
        },
        user_id: {
            type: String,
            required: [true, "Please enter a user id"],
        },
        shippingMethod:{
            type: String,
        },
        address:{
            type: String,
        }
    },
);
const Orders = mongoose.model('Orders', orderSchema);
module.exports = Orders;
