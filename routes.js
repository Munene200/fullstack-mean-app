const express = require ('express');
const router = express.Router();

const employee = require('./employee.js');

//POST API 
router.post('/',(req,res) => {
let employee = new employee({
    name: req.body.name,
    Position: req.body.Position,
    Department:req.body.Department,
});

emp.save((err, doc)  => {
    if(err) {
        console.log('Error in post data' + err);
    }
    else{
        res.send(doc);
    }


})

})

module.exports = router;