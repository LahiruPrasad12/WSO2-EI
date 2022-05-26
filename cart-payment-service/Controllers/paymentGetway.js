const sendEmail = require("../utils/email");
const AppError = require("../utils/appError");

exports.sendEmail = async (req, res, next) => {

    const ownerMessage = `You have order request from`;
    const clientMessage = `Payment was successfully`;

    try {

        await sendEmail({
            email: req.body.client_email,
            subject: 'Your payment',
            clientMessage
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
