const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const path = require('path')

const app = express()

const PORT = config.get('port') || 8080

app.use(express.json({}))

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/go', require('./routes/go.routes'))
app.use('/api/film', require('./routes/film.routes'))
app.use('/api/telegram', require('./routes/telegram.routes'))
app.use('/api/soon', require('./routes/soon.routes'))
app.use('/api/pay', require('./routes/pay.routes'))
app.use('/api/upload', require('./routes/upload.routes'))
app.use('/api/mail', require('./routes/mail.routes'))
app.use('/mailru-domaineKe3DOc7FT5T9b6J.html', require('./mailru-domaineKe3DOc7FT5T9b6J.html'))

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}




async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'),{
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    app.listen(PORT, () => console.log(`App has been started on port ${PORT} ...`))
  } catch (e) {
    console.log('Server Error', e.message)
    process.exit(1)
  }
}

start()
