const {Schema, model,Types} = require('mongoose')

const schema = new Schema({
  name: {type:String, required:true, unique:true},
  buys: {type:Number, default: 0},
  date: {type:Date, default: Date.now},
  state: {type:String},
  owner: {type: Types.ObjectId, ref: 'User'},
  year: {type:String, required:true},
  country: {type:String, required:true},
  genres: {type:String, required:true},
  time: {type:String, required:true},
  desc: {type:String, required:true},
  filmuri: {type:String, required:true},
  filmlogo: {type:String, required:true},
  bannerver: {type:String, required:true},
  bannerhor: {type:String, required:true},
  trailer: {type:String, required:true},
  promo: {type:String},
  director:{type:String},
  directorp:{type:String},
  actor1:{type:String},
  actor1p:{type:String},
  actor2:{type:String},
  actor2p:{type:String},
  actor3:{type:String},
  actor3p:{type:String},
  actor4:{type:String},
  actor4p:{type:String},
  actor5:{type:String},
  actor5p:{type:String},
  actor6:{type:String},
  actor6p:{type:String},
  actor7:{type:String},
  actor7p:{type:String},
  actor8:{type:String},
  actor8p:{type:String},
  actor9:{type:String},
  actor9p:{type:String},
  actor10:{type:String},
  actor10p:{type:String},
  cost: {type:Number}


})

module.exports = model('Film', schema)
