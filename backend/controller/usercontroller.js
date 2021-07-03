require('../model/productmodel');
require('../config/db.js');

const mongoose = require('mongoose');
var proData = mongoose.model('product');

// Add Product

module.exports.addnew = (req,res) => {
  var myData = new proData({
    pname:req.body.pname,
    pdetails:req.body.pdetails,
    phight:req.body.phight,
    pwidth:req.body.pwidth,
    ptype:req.body.ptype,
    pstatus:req.body.pstatus
  });
  myData.save().then((docs)=>{
    return res.status(200).json({
      message:'data inserted successfully',
      success:true,
      data:docs
    })
  }).catch((err)=>{
    return res.status(401).json({
      message:'Error in adding new product',
      success:false,
      data:err.message
    })
  })

}

//  get all products list

module.exports.getAll = (req,res)=>{
  proData.find().then((docs)=>{
  return res.status(200).json({
         message:'List of products .',
         success:true,
         data:docs
     });
 }).catch((err)=>{
  return res.status(401).json({
         message:'Error in finding products .',
         data:err.message
     });
 });
}

// Fetch selected data from the database

module.exports.selectedData = (req,res)=>{
  proData.findById({_id:req.params.id}).then((docs)=>{
      return res.status(200).json({
          message: 'Product Found',
          success:true,
          data:docs
      });
  }).catch((err)=>{
      return res.status(401).json({
          message:'Error in finding Product',
          success:false,
          data:err.message
      });
  });
  // console.log(docs);
}

// Delete the selected record from the database .

module.exports.deletedata = (req,res) => {

  proData.findByIdAndRemove({_id:req.params.id})
  .then((docs)=>{
      return res.status(200).json({
          success:true,
          message:'Data Deleted',
          data:docs
      });
  }).catch((err)=>{
          return res.status(401).json({
              success:false,
              message:'Error in Deleting data',
              err:err.message
      });
  });
}

// Update selected Product

module.exports.updatedData=(req,res)=>{
  proData.findByIdAndUpdate({_id:req.params.id},{$set:req.body},{new:true})
  .then((docs)=>{
  return res.status(200).json({
      success:true,
      message:'Product updated',
      data:docs
  });
  }).catch((err)=>{
      return res.status(401).json({
          success:false,
          message:'Error in updating data',
          err:err.message
  });
});
}
