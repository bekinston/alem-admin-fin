const {Router} = require('express')
const nodemailer=require('nodemailer')

const router = Router()

let otp = Math.random();
otp = otp * 1000000;
otp = parseInt(otp);
console.log(otp);

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service : 'Gmail',

    auth: {
        user: 'bekt884@gmail.com',
        pass: 'Mydick99',
    }

});

router.post('/send',async function(req,res){
    try{
        const email = req.body
        res.status(201).send({message:"привет" + email});
    }catch (e) {
        res.status(201).send({message:"привет" + " не удалось"});

    }

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
