const {Router} = require('express')
const nodemailer=require('nodemailer')
const Code = require('../models/Code')
const Customer = require('../models/Customer')
const jwt = require("jsonwebtoken");
const config = require("config");

const router = Router()

const {check, validationResult} = require("express-validator");
const User = require("../models/User");

let transporter = nodemailer.createTransport({
    host: "smtp.mail.ru",
    port: 465,
    secure: true,
    auth: {
        user: 'support@alem-cinema.kz',
        pass: '1Pf25cwzNXZkqdPz28G7',
    }

});

router.post(
    '/send',
    [
        check('email', 'Некорректный email').isEmail(),
    ],
    async (req, res) => {
    try{
        const {email} = req.body
        email.toLowerCase();
        let otp = Math.random();
        otp = otp * 10000;
        otp = parseInt(otp);

        let candidate = await Customer.findOne({ email })

        if(candidate){
            candidate.code = otp;
        }else{
            candidate = new Customer( {email, code:otp, film:[]})
        }

        candidate.save();

        const mailOptions = {
            from: "support@alem-cinema.kz",
            to: email,
            subject: "Код верификации: ",
            html: "<h3>Код верификации аккаунта </h3>" + "<h1 style='font-weight:bold;'>" + otp + "</h1>" // html body
        };

        await transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            let otptext = otp.toString();
            res.status(201).json({otptext});
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
