const express = require('express');
const router = express.Router();
const messagesController = require('../controllers/messages');


router.get('/', messagesController.get);
router.post('/', messagesController.create);
router.get('/:id', messagesController.getById);
router.put('/:id', messagesController.update);
router.delete('/:id', messagesController.remove);


module.exports = router;