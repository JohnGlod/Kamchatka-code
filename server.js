'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 5000;

app.use(express.static('build'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/build/index.html');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.post('/', (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
  const mailOptions = {
    from: req.body.email,
    to: process.env.EMAIL,
    subject: `Камчатка шлет привет от ${req.body.email}: ${req.body.name}`,
    text: `Я, ${req.body.name} хочу забронировать ${req.body.quantity} мест. Мой тариф — ${req.body.tariff}, a желаемая дата — ${req.body.date}. Моими пожеланиями / комментариями будут: ${req.body.message}`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.send('Error');
    } else {
      console.log('Email отправлен' + info.response);
      res.send('Success');
    }
  });
});
