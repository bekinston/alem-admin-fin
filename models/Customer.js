const {Schema, model,Types} = require('mongoose')

const schema = new Schema({
    email:{type:String},
    films : { type : Array , "default" : [] },
})

module.exports = model('Customer', schema)
