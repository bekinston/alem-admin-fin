const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  headname: {type:String, required: true},
  description: {type:String, required: true},
  companyname: {type:String, required: true},
  tel: {type:String, required: true},
  iban: {type:String, required: true},
  bank: {type:String, required: true},
  films: [{ type: Types.ObjectId, ref: 'Film' }]
})

module.exports = model('User', schema)
