const sendEmail = require("../utils/email");
exports.forgotPassword = async (req, res, next) => {
    // Get user based on POSTed email


    //Generate the random reset token




    const message = `Forgot your password? `;

    try {
        await sendEmail({
            email: req.body.email,
            subject: 'Your password reset token (valid for 10 min)',
            message
        });

        res.status(200).json({
            status: 'success',
            message: 'Email has been sent'
        });
    } catch (err) {

        return next(
            new AppError('There was an error sending the email. Try again later!'),
            500
        );
    }
};
