const {Schema, model,Types} = require('mongoose')

const schema = new Schema({
  owner: {type: Types.ObjectId, ref: 'User'},
  date: {type:String, required:true},
  sum: {type:String, required:true},
  film: {type:String, required:true},
  state:{type:String}

})

module.exports = model('Pay', schema)
