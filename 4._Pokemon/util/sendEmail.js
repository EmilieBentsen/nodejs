"use strict";
import { response } from "express";
import nodemailer from "nodemailer";


var transporter = nodemailer.createTransport({
  service: 'gmail',
  port: '465',
  secure: true,
  auth: {
    user: 'emilie.bentsen@gmail.com',
    pass: 'jjyswwunkuzpvwrp'
  }
});


export function sendEmailFromContactPage(email, message){

    var mailOptions = {
        from: 'emilie.bentsen@gmail.com',
        to: email,
        subject: "Mail from pokemon contactpage!",
        text: message
      };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}


