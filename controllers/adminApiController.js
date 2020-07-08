const Template = require('../models/template');

/*
Get all templates
*/
const getTemplates = async (req, res, next) => {
    try {
        const templates = await Template.find();
        res.status(200).json(templates)
    } catch (err) {
        next(new Error(err))
    }
}

/*
Add template
*/
const addTemplate = async (req, res, next) => {
    try {
        const { templateName, templateVersion } = req.body;

        //validation
        if (!templateName || !templateVersion) return res.json({ message: "To add template you must provide name and version." })

        // check if template already exist
        const checkTemplate = await Template.findOne({ name: templateName });
        if (checkTemplate) return res.json({ message: "Template already exist." })

        const template = await new Template({ name: templateName })
        template.versions.push(templateVersion)
        await template.save();
        res.status(201).json(template)
    } catch (err) {
        next(new Error(err))
    }
}


/*
Add version to template
*/
const addTemplateVersion = async (req, res, next) => {
    try {
        const { name, version } = req.body;

        // validation
        if (!name || !version) return res.json({ message: 'All fields are required.' })

        const template = await Template.findOne({ name })
        if (!template) return res.json({ message: "There is no such template" })


        // check if version already exist in template
        if (template.versions.includes(version)) return res.json({ message: "This version of template already exist." })

        template.versions.push(version)
        await template.save()

        res.status(201).json(template)
    } catch (err) {
        next(new Error(err))
    }
}

module.exports = {
    getTemplates,
    addTemplate,
    addTemplateVersion
}