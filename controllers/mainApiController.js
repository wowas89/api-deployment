const Deployment = require('../models/deployment');
const validator = require('validator');

/*
Get all deployments
*/
const getDeployments = async (req,res,next)=>{
    try{
        const deployments =  await Deployment.find();
        res.status(200).json(deployments)
    } catch(err){
        next(new Error(err))
    }
}

/*
Add deployment
*/
const addDeployment = async (req,res,next)=>{
    try{
        const {url, templateName, version} = req.body;

        //validation
        if(!url || !templateName || !version) return res.json({message:"You must fill all fields"});
        if(!validator.isURL(url)) return res.json({message:"URL is invalid."});
    
        const deployment = await new Deployment({url, templateName, version})
        await deployment.save();
    
        res.status(201).json(deployment)
    } catch(err){
        next(new Error(err))
    }
}

/*
Delete deployment
*/
const deleteDeployment = async (req,res,next)=>{
    try{
        const deploymentId = req.params.id;

        // validation
        if(!deploymentId) return res.json({message:"Your request is not complete."})

        const deployment = await Deployment.deleteOne({_id:deploymentId})
        if(deployment.deletedCount === 0) return res.json({message:"There is no such deployment in our database"})
        res.status(200).json({successMessage:'Successfully deleted deployment'})
    } catch(err){
        next(new Error(err))
    }
}

module.exports = {
    getDeployments,
    addDeployment,
    deleteDeployment
}