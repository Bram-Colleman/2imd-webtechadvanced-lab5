const express = require('express');
const router = express.Router();
const messagesController = require('../controllers/messages');


router.get('/', messagesController.getAll);
router.post('/', messagesController.create);


module.exports = router;