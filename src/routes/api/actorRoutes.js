const express = require('express');
const router = express.Router();
const {list, detail, create, destroy } = require('../../controllers/api/actorController');

router.get('/api/actors', list);
router.get('/api/actors/detail/:id', detail);
router.post('/api/actors/create', create);
router.delete('/api/actors/delete/:id', destroy);



module.exports = router;