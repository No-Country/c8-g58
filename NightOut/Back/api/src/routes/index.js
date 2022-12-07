const { Router } = require('express');
const router = Router();

const Users = require('./Users.js');
const Publications = require('./Publications.js');
const Reviews = require('./Reviews.js');

router.use('/users', Users);
router.use('/publications', Publications);
router.use('/reviews', Reviews);

module.exports = router;
