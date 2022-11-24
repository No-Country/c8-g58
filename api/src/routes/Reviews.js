const { Router } = require('express');
const router = Router();

const { postReview } = require('../controllers/review/postReview');
const { deleteReview } = require('../controllers/review/deleteReview');

router.post('/', postReview);

router.delete('/delete/:id', deleteReview);

module.exports = router;
