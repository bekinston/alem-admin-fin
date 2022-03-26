const {Router} = require('express')
const nodemailer=require('nodemailer')
const Code = require('../models/Code')
const Customer = require('../models/Customer')
const jwt = require("jsonwebtoken");
const config = require("config");

const router = Router()

let transporter = nodemailer.createTransport({
    host: "smtp.mail.ru",
    port: 465,
    secure: true,
    auth: {
        user: 'support@alem-cinema.kz',
        pass: '1Pf25cwzNXZkqdPz28G7',
    }

});

router.post('/send',  async(req,res)=>{
    try{

        const {email} = req.body

        let otp = Math.random();
        otp = otp * 100000;
        otp = parseInt(otp);

        const code = new Code({email, code:otp})
        code.save()

        const mailOptions = {
            from: "support@alem-cinema.kz",
            to: email,
            subject: "Otp for registration is: ",
            html: "<h3>OTP for account verification is </h3>" + "<h1 style='font-weight:bold;'>" + otp + "</h1>" // html body
        };

        await transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            res.status(201).json({message: 'otp' + opt});

            }
        )}catch (e) {
        res.status(500).json({message:'noooooo.....'});
    }
    // send mail with defined transport object
    /*

        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.status(201).send({message: otp})

    });*/
});

router.post('/verify',  async(req,res)=>{
    try {
        const {otp, email} = req.body

        email.toLowerCase()

       const existing = await Code.findOne({ otp })

        if (existing){
            const isUser = await Customer.findOne({ email })
            if(!isUser){
                const customer = await new Customer({email})
                customer.save()
                const token = jwt.sign(
                    { email: email },
                    config.get('jwtSecret'),
                )
                res.status(201).json({ token, email: email })
            }else{
                const token = jwt.sign(
                    { email: email },
                    config.get('jwtSecret'),
                )
                res.status(201).json({ token, email: email })
            }

        }

    }catch (e) {
        res.status(500).json({message:'noooooo.....'});
    }

});

module.exports = router
