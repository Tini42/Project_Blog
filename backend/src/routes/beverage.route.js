const express = require('express');
const router = express.Router();

const beverageController = require('../app/controllers/BeverageController');
const BeverageController = require('../app/controllers/BeverageController');

router.post('/menu', beverageController.menu);

router.get('/:id/edit', beverageController.edit);

router.put('/:id', beverageController.update);

router.delete('/:id', beverageController.destroy);



module.exports = router;