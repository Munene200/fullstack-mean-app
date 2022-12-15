const mongoose =require ('mongoose');

mongoose.connect('mongodb://localhost:27017/employee',err =>{
if(!err) {
    console.log('Connection is successfully established');
}else {
    console.log('error connecting' + err);}

})
module.exports = mongoose;