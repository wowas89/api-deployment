const mongoose = require('mongoose');


const templateSchema = new mongoose.Schema({
    name:{
        type:String,
        minlength: 1,
        require: true
    },
    versions:[{
        type:String,
        minlength: 1,
        require: true
    }]
})


module.exports = new mongoose.model("Templates", templateSchema);