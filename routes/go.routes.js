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
    const go = await Film.updateOne({name}, {$set: {state : "zero"}})
    res.status(201).json({ message:'Фильм удален' })
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

router.post('/addfilm', async (req, res) => {
  try {
    const {name, promo, cost} = req.body
    var onsc = 90
    const days = await Film.findOne({name, onscreen:"90"})
    if (!days){
         onsc = 45
    }



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



    let date = Date.now()

    let d1 = new Date(date),
        month1 = '' + (d1.getMonth() + 1),
        day1 = '' + d1.getDate(),
        year1 = d1.getFullYear();

    if (month1.length < 2)
        month1 = '0' + month1;
    if (day1.length < 2)
        day1 = '0' + day1;

        var result = new Date(date);
        result.setDate(result.getDate() + onsc);

        let d2 = new Date(result),
        month2 = '' + (d2.getMonth() + 1),
        day2 = '' + d2.getDate(),
        year2 = d2.getFullYear();

        if (month2.length < 2)
            month2 = '0' + month2;
        if (day2.length < 2)
            day2 = '0' + day2;


    var startdate1 = [day1, month1, year1].join('.')

    var enddate1 = [day2, month2, year2].join('.')


    const go = await Film.updateOne({name}, {$set: {state : "go", promo : promo, cost: cost, startdate: startdate1, enddate:enddate1 }})



    res.status(201).json({ message:'Фильм добавлен' })
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

router.get('/', async (req, res) => {
  try {
    const films = await Film.find({ state: "go" }).sort({date:-1})
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
