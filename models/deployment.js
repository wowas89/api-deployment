const mongoose = require('mongoose');


const deploymentSchema = new mongoose.Schema({
    url:{
        type:String,
        minlength: 3,
        require: true
    },
    templateName:{
        type:String,
        minlength: 1,
        require: true
    },
    version:{
        type:String,
        minlength: 1,
        require: true
    },
    deployedAt:{
        type: Date,
        default: Date.now
    }
})


module.exports = new mongoose.model("Deployments", deploymentSchema);