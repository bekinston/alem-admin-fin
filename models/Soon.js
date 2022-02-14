const {Schema, model,Types} = require('mongoose')

const schema = new Schema({
  name: {type:String, required:true},
  date: {type:String, required:true},
  photo:{type:String, required:true},
  desc:{type:String, required:true},
  state:{type:String}

})

module.exports = model('Soon', schema)
