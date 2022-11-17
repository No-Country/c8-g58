const axios = require('axios');
const { User, Publication } = require('../../db');

const preload = async () => {
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
	} catch (e) {
		console.log(e);
	}
};

const getPublications = async (req, res) => {
	const publicationsDb = await Publication.findAll({});
	res.status(200).json(publicationsDb);
};

const getPublicationByName = async (req, res) => {
	const publicationsDb = await Publication.findAll({});
	res.status(200).json(publicationsDb);
};

const getPublicationDetail = async (req, res) => {
	const publicationsDb = await Publication.findAll({});
	res.status(200).json(publicationsDb);
};

const getPublicationByLocation = async (req, res) => {
	const { location } = req.params;
	if (location) {
		const locationDb = location.toLowerCase();
		const pubsByLocation = await Publication.findAll({
			where: { location: locationDb }
		});
		pubsByLocation.length > 0
			? res.status(200).json(pubsByLocation)
			: res.status(500).json('No hay aca, perro');
	}
};

const getPublicationByEvent = async (req, res) => {
	const { event } = req.params;
	const eventDb = event.toLowerCase();
	if (event) {
		const pubsByEvent = await Publication.findAll({
			where: { event: eventDb }
		});
		pubsByEvent.length > 0
			? res.json(pubsByEvent)
			: res.json('No hay aca, perro');
	}
};

module.exports = {
	preload,
	getPublications,
	getPublicationDetail,
	getPublicationByName,
	getPublicationByLocation,
	getPublicationByEvent
};
