const router = require('express').Router();

const mainApiController = require('../controllers/mainApiController');

router.get('/deployments', mainApiController.getDeployments);
router.post('/deployment', mainApiController.addDeployment);
router.delete('/deployment/:id', mainApiController.deleteDeployment);


module.exports = router;



