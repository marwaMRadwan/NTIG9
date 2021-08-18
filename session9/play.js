const nodemailer = require('nodemailer')

try{
    const stmpConfig ={
        service: 'gmail',
        auth:{
            user:"marwaradwan666@gmail.com",
            pass:"123@Techs"
        }
    }
    const transporter = nodemailer.createTransport(stmpConfig)
    let mailOptions = {
        from:"Social App",
        to:"marwaradwan6@gmail.com",
        subject:"test mail",
        text:"hello test"
    }
    transporter.sendMail(mailOptions)
}
catch(e){
    console.log(e)
}