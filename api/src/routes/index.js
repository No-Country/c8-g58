const { Router } = require('express');
const router = Router();

const Users = require('./Users.js');
const Publications = require('./Publications.js');

router.use('/users', Users);
router.use('/publications', Publications);

module.exports = router;
