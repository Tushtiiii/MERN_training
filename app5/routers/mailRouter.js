const router = require('express').Router();
const nodemailer = require('nodemailer');

router.post('/send', async (req, res) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "tushteekothare@gmail.com",
                pass: "aahl hlae nuwu erwd"
            }
        });
        const mailOptions = {
            from: "tushteekothare@gmail.com",
            to: "tushteekothare230881@acropolis.in",
            subject: "test mail from nodejs",
            text: "sample test email generated through nodejs"
        };
        await transporter.sendMail(mailOptions);
        res.json('Email sent successfully');
    }
    catch (ex) {
        console.error( ex);
        res.status(500).json('Failed to send email' );
    } 
})

module.exports = router;

