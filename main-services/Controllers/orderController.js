const Order = require('../Models/Orders');



exports.saveOrder = async (req, res) => {
    try {
        console.log(req.body)

    } catch (error) {
        console.error(error);
        return res.status(400).json({ message: error.message});
    }
};