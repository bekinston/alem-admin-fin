const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  email: {type: String, required: true},
  phone: {type: String, required: true},
  headname: {type: String, required: true},
  companyname: {type: String, required: true}

})

module.exports = model('Tele', schema)
