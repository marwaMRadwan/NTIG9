// // const nodemailer = require('nodemailer')

// // try{
// //     const stmpConfig ={
// //         service: 'gmail',
// //         auth:{
// //             user:"marwaradwan666@gmail.com",
// //             pass:"123@Techs"
// //         }
// //     }
// //     const transporter = nodemailer.createTransport(stmpConfig)
// //     let mailOptions = {
// //         from:"Social App",
// //         to:"marwaradwan6@gmail.com",
// //         subject:"test mail",
// //         text:"hello test"
// //     }
// //     transporter.sendMail(mailOptions)
// // }
// // catch(e){
// //     console.log(e)
// // }


// const express = require('express')
// const multer  = require('multer')
// const upload = multer({ dest: 'uploads/' })
// const fs = require('fs')
// const app = express()

// app.post('/profile', upload.single('image'), function (req, res) {
//     data = req.file
//     let ext = (req.file.originalname.split('.')).pop()
//     newFileName = req.file.destination + req.file.filename + "." + ext
//     fs.rename(req.file.path, newFileName, function(err){
//         if(err) console.log(err)
//         else console.log('done')
//     })
//     res.send(req.file)
// })

// app.listen(4000)
const express = require('express');
const app = express();

/** Require multer */
const multer = require('multer');

/** Show page with a form with a specific enctype */
app.get('/', (req, res, next) => {
  res.send(`<form method="POST" action="/" enctype="multipart/form-data">
  <input type="text" name="username" placeholder="username">
  <input type="submit">
</form>`);
});

/** Process POST request with a mutter's middleware */
app.post('/', multer().none(), function (req, res, next) {
  res.send(JSON.stringify(req.body));
});

/** Run the app */
app.listen(3000);