const express = require('express');
//allows us to add body onto requests, rather than just params
const router = express.Router();
//middleware that allows client/server relationship to wrok better
const cors = require('cors');

const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`))

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "willdarkins@gmail.com",
      pass: "Doxxie123456",
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

  router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 
    const mail = {
      from: name,
      to: "***************@gmail.com",
      subject: "Contact Form Submission",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
  });