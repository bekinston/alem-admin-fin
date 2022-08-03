const {Schema, model,Types} = require('mongoose')

const schema = new Schema({
    email:{type:String},
    code:{type:String},
    films:[{
        name:{type:String},
        genres:{type:String},
        time:{type:String},
        bannerver:{type:String},
        filmuri:{type:String},
    }],
})

// const elementToPush = { a: 1, b: 2 };
// const body = { $push: { arrayField: elementToPush } };
// model.patch(id, body);

module.exports = model('Customer', schema)
