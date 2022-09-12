const express = require('express')
const router = new express.Router()
var nodemailer = require('nodemailer');

router.post("/user/email", async (req, res) => {

    const { email } = (req.body)

    const transporter = nodemailer.createTransport({
        host: process.env.host,
        port: process.env.portNumber,
        secure: false,
        requireTLS: true,
        auth: {
            user: process.env.user,
            pass: process.env.password
            
        }
    });
    const mailOptions = {
        from: process.env.sender_email,
        to: email,
        subject: 'Welcome to the App',
        text: "Hii connection Welcome to app let me know along with the app",
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.status(400).send({
                success: false,
                message: "Email sending failed"
            })
        }
        else {
            res.status(200).send({
                success: true,
                message: "Thanks for subscribe our channel"
            })
        }
    });
})
module.exports = router