const {Router} = require('express')
const router = Router()

router.post('/send', async (req, res) => {
    try {
        const {email} = req.body

        res.status(201).json({ message:'email: ' + email })
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})




module.exports = router
