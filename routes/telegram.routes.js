const {Router} = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const Tele = require('../models/Tele')
const router = Router()
const { TelegramClient } = require('messaging-api-telegram');

const client = new TelegramClient({
  accessToken: '5115482792:AAFVtayQPp5kzlydiTO79bt42Mkn-Q8sJLk',
});

const chatId = '-1001641593317'



router.post('/send',async (req, res) => {
  try {

    const {headname, email, companyname, phone} = req.body

    const mes = 'ФИО руководителя: ' + headname + '\n' + 'E-mail: ' + email + '\n'+ 'Название компании: ' + companyname + '\n'+ 'Телефон: ' + phone;


    client.sendMessage(chatId, mes).then(() => {
      console.log('sent');
    });

    res.status(201).json({ message: 'Заявка отправлена' })

  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})


module.exports = router
