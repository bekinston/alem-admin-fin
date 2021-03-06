const {Router} = require('express')
const Soon = require('../models/Soon')
const router = Router()

router.post('/deletesoon', async (req, res) => {
  try {
    const {id} = req.body

    console.log(id);

    const go = await Soon.updateOne({id}, {$set: {state : "zero"}})

    res.status(201).json({ message:'Интересное удалено' })
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

router.post('/addsoon', async (req, res) => {
  try {
    const {name, isVideo, logo, content, desc, url, state,sec} = req.body
    const go = new Soon({name, isVideo, logo, content, desc, url, state, sec})
    go.save()
    res.status(201).json({ message:'Интересное добавлено' })
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

router.get('/', async (req, res) => {
  try {
    const soons = await Soon.find({ state: "go" }).sort({start: -1})
    res.json(soons)
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})



module.exports = router
