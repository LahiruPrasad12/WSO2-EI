const {model, Schema} = require("mongoose");
const mongoose = require("mongoose");

const orderSchema = new Schema(
    {
        items: {
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
        },
        totalAmount:{
            type: String
        }
    },
);
const Orders = mongoose.model('Orders', orderSchema);
module.exports = Orders;
