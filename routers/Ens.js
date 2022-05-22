const express = require('express');
const Ens = require('../controllers/Ens')
const router = express.Router();

router.get('/AddEns',Ens.GetAddEns)

router.post('/AddEns',Ens.PostAddEns)
router.get('/',Ens.GetDash)

module.exports = router