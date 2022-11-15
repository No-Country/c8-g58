const { Router } = require('express');
const router = Router();

const axios = require('axios');

router.get('/', (req, res) => {
	res.send('Hola');
});

module.exports = router;
