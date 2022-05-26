const sendEmail = require("../utils/email");
const AppError = require("../utils/appError");

exports.sendEmail = async (req, res, next) => {
    console.log(req.body)
    const message = `Payment was successfull`;

    try {
        await sendEmail({
            email: req.body.email,
            subject: 'Your payment',
            message
        });

        res.status(200).json({
            status: 'success',
            message: 'Email has been sent'
        });
    } catch (err) {

        return next(
            new AppError(err),
            500
        );
    }
};
