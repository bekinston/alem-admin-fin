const {Router} = require('express')
var multer = require("multer")
const auth = require('../middleware/auth.middleware')
const fs = require('fs')
const stream = require('stream')
const router = Router()
const http2 = require('http2')


var EasyYandexS3 = require("easy-yandex-s3")

var s3 = new EasyYandexS3({
  auth: {
      accessKeyId: "Pa2PKIU2Lmy_jKKXHOtj",
      secretAccessKey: "wEqGMwx0NHdEaV4reWIyn_J3JFuk4LDSTXpf6vgo",
  },
  Bucket: "alemuploads",
  debug: false
})



router.use(multer().any())

global.globalString = ""

router.post('/create', async (req, res) => {
  try {


    const {direction} = req.body

    const url = '/' + direction + '/'

    globalString = url

    res.status(201).json({message:"Путь создан"})

  } catch (e) {
    res.status(500).json({e})
  }
})

router.post('/upload', async (req, res) => {
  try {
    let buffer = req.files[0].buffer

    var upload = await s3.Upload({buffer}, globalString)

    res.status(201).json({upload})
  } catch (e) {
    res.status(500).json({e})
  }
})







module.exports = router
