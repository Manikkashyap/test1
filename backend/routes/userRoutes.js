var express = require('express');
var myctrl = require('../controller/usercontroller');

var approute = express.Router();

approute.post('/newproduct',myctrl.addnew); //api for adding new product

approute.get('/getall',myctrl.getAll); //api for gett all products .

approute.get('/selectedData/:id',myctrl.selectedData); // api for selected product .

approute.delete('/deleteselectedData/:id',myctrl.deletedata); // api for delete selected product fronm the database .

approute.put('/updateselectedData/:id',myctrl.updatedData);

module.exports=approute;
