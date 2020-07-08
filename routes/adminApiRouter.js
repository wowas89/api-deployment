const router = require('express').Router();

const adminApiController = require('../controllers/adminApiController');

router.get('/templates', adminApiController.getTemplates);
router.post('/template', adminApiController.addTemplate);
router.post('/templateVersion', adminApiController.addTemplateVersion);


module.exports = router;



