//this is a model
const mongoose = require ('mongoose');

const employee = mongoose.model('employee', {
Name:{type:String},
Position:{type:String},
Department:{type:String},
})

module.exports = employee;