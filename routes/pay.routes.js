const {Router} = require('express')
const Pay = require('../models/Pay')
const auth = require('../middleware/auth.middleware')
const router = Router()

router.post('/generate',auth, async (req, res) => {
  try {

    const {date, film, sum} = req.body

    if(date.length === 0){
      return res.json({message:"Обозначьте дату"})
    }

    if(sum.length === 0){
      return res.json({message:"Обозначьте сумму"})
    }

    const pay = new Pay({date, film, sum, state:"zero", owner: req.user.userId})

    pay.save()

    res.status(201).json({ message:"Заявка подана" })
  } catch (e) {
    res.status(500).json({ e })
  }
})

router.get('/', async (req, res) => {
  try {
    const pay = await Pay.find({ state: "zero" })
    res.json(pay)
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})





module.exports = router
