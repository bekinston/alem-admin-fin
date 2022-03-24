const {Router} = require('express')
const nodemailer=require('nodemailer')
const Code = require('../models/Code')


const router = Router()



let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
        user: 'tony.buckridge9@ethereal.email',
        pass: 'ZWmPQamddphaCpjwFT',
    }

});

router.post('/send', async function(req,res){
    try{
        const {email} = req.body

        let otp = Math.random();
        otp = otp * 1000;
        otp = parseInt(otp);

        const code = new Code({email, code:otp})
        code.save()

        var mailOptions={
            to: email,
            subject: "Otp for registration is: ",
            html: "<h3>OTP for account verification is </h3>"  + "<h1 style='font-weight:bold;'>" + otp +"</h1>" // html body
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }

        res.status(201).json({message:'message'+ email})
    }catch (e) {
        res.status(500).json({message:'noooooo.....'})
    }

    // send mail with defined transport object
    /*

        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.status(201).send({message: otp})

    });*/
});

router.post('/verify',function(req,res){

    if(req.body.otp===otp){
        res.send("You has been successfully registered");
    }
    else{
        res.render('otp',{msg : 'otp is incorrect'});
    }
});

router.post('/resend',function(req,res){
    var mailOptions={
        to: email,
        subject: "Otp for registration is: ",
        html: "<h3>OTP for account verification is </h3>"  + "<h1 style='font-weight:bold;'>" + otp +"</h1>" // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.render('otp',{msg:"otp has been sent"});
    });

});



module.exports = router
