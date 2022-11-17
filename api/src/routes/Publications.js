const { Router } = require('express');
const router = Router();
const axios = require('axios');
const { Publication } = require('../db');

router.get('/', async (req, res) => {
	try {
		let concertsApi = await axios.get(
			'https://api.seatgeek.com/2/events?client_id=MzAyMzcwODB8MTY2ODA4NjE2OS42NzE3MTc2'
		);
		let mapApi = concertsApi.data.events.map((e) => {
			return {
				name: e.performers[0].name,
				image: e.performers[0].image,
				text: e.performers[0].url,
				event: e.type
			};
		});
		mapApi.forEach(async (e) => {
			await Publication.create(e);
		});
		// await Publication.create(mapApi[0]);
		// console.log(mapApi);
		return res.send('creado');
	} catch (e) {
		res.send(e);
	}
});

module.exports = router;
