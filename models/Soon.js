const {Schema, model,Types} = require('mongoose')

const schema = new Schema({
  name: {type:String},
  isVideo: {type:String},
  logo:{type:String},
  content:{type:String, required:true},
  desc:{type:String},
  url:{type:String},
  sec:{type:String},
  state:{type:String},
})

module.exports = model('Soon', schema)
