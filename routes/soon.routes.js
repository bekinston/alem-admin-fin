const {Router} = require('express')
const Soon = require('../models/Soon')
const router = Router()

router.post('/deletesoon', async (req, res) => {
  try {
    const {name} = req.body


    const go = await Soon.updateOne({name}, {$set: {state : "zero"}})

    res.status(201).json({ message:'Интересное удалено' })
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

router.post('/addsoon', async (req, res) => {
  try {
    const {name, date, photo, desc} = req.body


    if(name.length === 0){
      return res.json({message:'Введите название'})
    }

    if(date.length === 0){
      return res.json({message:'Введите дату'})
    }

    if(photo.length === 0){
      return res.json({message:'Введите фото'})
    }

    if(desc.length === 0){
      return res.json({message:'Введите описание'})
    }

    const go = new Soon({name, date, photo, desc, state:"go"})


    go.save()



    res.status(201).json({ message:'Интересное добавлено' })
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

router.get('/', async (req, res) => {
  try {
    const soons = await Soon.find({ state: "go" })
    res.json(soons)
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})



module.exports = router
