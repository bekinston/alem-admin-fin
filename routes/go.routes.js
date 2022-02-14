const {Router} = require('express')
const Film = require('../models/Film')
const router = Router()

router.post('/searchfilm', async (req,res) => {
  try {
    const {name} = req.body

    const ready = await Film.findOne({name})

    if(!ready){
      return res.json({message:"фильм не найден"})
    }

    res.status(201).json({ ready })
  } catch (e) {

  }
})

router.post('/deletefilm', async (req, res) => {
  try {
    const {name} = req.body

    console.log(name)

    const go = await Film.updateOne({name}, {$set: {state : "zero"}})



    res.status(201).json({ message:'Фильм удален' })
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

router.post('/addfilm', async (req, res) => {
  try {
    const {name, promo, cost} = req.body

    if(cost.length === 0){
      return res.json({message:'Введите стоимость фильма'})
    }


    if(name.length === 0){
      return res.json({message:'Введите название фильма'})
    }

    const ready = await Film.findOne({name,state:"go"})

    if(ready){
      return res.json({message:'Фильм уже выложен'})
    }

    const existing = await Film.findOne({ name })


    if (!existing){
      return res.json({message:'Фильм не существует'})
    }

    const go = await Film.updateOne({name}, {$set: {state : "go", promo : promo, cost: cost}})

    res.status(201).json({ message:'Фильм добавлен' })
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

router.get('/', async (req, res) => {
  try {
    const films = await Film.find({ state: "go" })
    res.json(films)
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

router.get('/other', async (req, res) => {
  try {
    const films = await Film.find({ state: "zero" })
    res.json(films)
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})



module.exports = router
