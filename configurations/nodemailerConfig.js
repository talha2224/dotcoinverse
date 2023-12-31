const nodemailer = require("nodemailer");

const SendEmail = (email, subject, h1, msg) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "talhahaider064@gmail.com",
        pass: "dubqiqclgicczovn",
      },
    });
    const mailOptions = {
      from: "talhahaider064@gmail.com",
      to: email,
      subject: subject,
      html: `
        <h1>${h1}</h1>
        <h3>${msg}</h3>
        `,
    };
    transporter.sendMail(mailOptions, function (err, info) {
      console.log('send')
      if (err) {
        console.log(err);
      }
    });
  } 
  catch (error) {
    console.log(error);
  }
};

module.exports = { SendEmail };
