const express = require('express');
//allows us to add body onto requests, rather than just params
const router = express.Router();
//middleware that allows client/server relationship to wrok better
const cors = require('cors');

const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router)
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