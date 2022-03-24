const {Schema, model,Types} = require('mongoose')

const schema = new Schema({
    email:{type:String},
    code:{type:String},

})

module.exports = model('Customer', schema)
