const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test1db',{useUnifiedTopology:true,useNewUrlParser:true}).then(()=>
{console.log("Conected to database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});
