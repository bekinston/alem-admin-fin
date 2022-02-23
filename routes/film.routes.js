const {Router} = require('express')
const Film = require('../models/Film')
const auth = require('../middleware/auth.middleware')
const router = Router()

router.post('/generate', auth, async (req, res) => {
  try {
    const {name, year, genres, country, time, desc, filmuri, filmlogo, bannerver, bannerhor, trailer,onscreen,
    director, directorp,
    actor1, actor1p,
    actor2, actor2p,
    actor3, actor3p,
    actor4, actor4p,
    actor5, actor5p,
    actor6, actor6p,
    actor7, actor7p,
    actor8, actor8p,
    actor9, actor9p,
    actor10, actor10p,
  } = req.body

    const existing = await Film.findOne({ name })

    if (existing){
      return res.json({message:'фильм уже существует'})
    }


    const film = new Film({name, year, genres, country, time, desc, filmuri, filmlogo, bannerver, bannerhor, trailer,onscreen,
      director, directorp,
      actor1, actor1p,
      actor2, actor2p,
      actor3, actor3p,
      actor4, actor4p,
      actor5, actor5p,
      actor6, actor6p,
      actor7, actor7p,
      actor8, actor8p,
      actor9, actor9p,
      actor10, actor10p, promo:'none', state:'zero',cost: 0, owner: req.user.userId, enddate:'01.01.1970'})

    film.save()

    res.status(201).json({ message:"Фильм создан" })
  } catch (e) {
    res.status(500).json({ e })
  }
})

router.get('/myfilms', auth, async (req, res) => {
  try {
    const films = await Film.find({ owner: req.user.userId })
    res.json(films)
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

module.exports = router
