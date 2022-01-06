const express = require('express');

const cors = require('cors');

const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000

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

app.post("/contact", (req, res) => {

  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const phone = req.body.phone;
  const message = req.body.message;
  const mail = {
    from: firstname,
    to: "willdarkins@gmail.com",
    subject: "Contact Form Submission",
    html: `<p>First Name: ${firstname}</p>
            <p>Last Name: ${lastname}</p>
             <p>Email: ${email}</p>
             <p>Phone: ${phone}</p>
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

app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`))