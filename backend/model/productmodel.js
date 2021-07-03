const mongoose = require('mongoose');

var productschema = mongoose.Schema({

  pname:{
    type:String
  },
  pdetails:{
    type:String
  },
  phight:{
    type:String
  },
  pwidth:{
    type:String
  },
  ptype:{
    type:String
  },
  pstatus:{
    type:Boolean
  }

});

mongoose.model('product',productschema);
