const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  var transporter =   nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'agencyvault7@gmail.com',
          pass: 'tzjjhevhpzarkxfg'
      }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"VaultIndustria👻" <foo@example.com>', // sender address
    to: "sabadevs20@gmail.com", // list of receivers
    subject: "Link for registration ✔", // Subject line
    text: 'http://localhost:3000/user-agreement', // plain text body
    html: `<b>Follow the link to register:</b>
    <a href=${'http://localhost:3000/user-agreement'}/>Register</a>
    `, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);