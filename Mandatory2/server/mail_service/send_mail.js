import nodemailer from "nodemailer"

export function sendEmail(receiver, subject, text){

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'emilie.bentsen@gmail.com',
      pass: process.env.MAIL_PASSWORD
    }
  })
      
  var mailOptions = {
    from: 'youremail@gmail.com',
    to: receiver,
    subject: subject,
    text: text
  }
      
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error)
    } else {
      console.log('Email sent: ' + info.response)
    }
  })
}


