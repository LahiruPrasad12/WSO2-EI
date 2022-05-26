const Order = require('../Models/OrdersModel');



exports.saveOrder = async (req, res) => {
    try {
        console.log(req.body)
        let data = await Order.create(req.body)
        return res.status(200).json({
            message: "Order was saved successfully",
            product: data,
        });

    } catch (error) {
        console.error(error);
        return res.status(400).json({ message: error.message});
    }
};