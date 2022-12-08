const axios = require('axios');
const { User, Publication, Review } = require('../../db');
const allInfo = require('./info.json');

const preload = async () => {
	try {
		allInfo.forEach(async (p) => {
			await Publication.create(p);
		});
	} catch (e) {
		console.log(e);
	}
};

var publicationsDb;

const filterByName = async (name) => {
	try {
		publicationsDb = publicationsDb.filter((e) =>
			e.name.toLowerCase().includes(name.toString().toLowerCase())
		);
		return publicationsDb;
	} catch (e) {
		console.log(`Error function filterByName: ${e}`);
	}
};

const filterByLocation = async (location) => {
	try {
		publicationsDb = publicationsDb.filter((e) =>
			e.location.toLowerCase().includes(location.toString().toLowerCase())
		);
		return publicationsDb;
	} catch (e) {
		console.log(`Error function filterByLocation: ${e}`);
	}
};

const filterByEvent = async (event) => {
	try {
		publicationsDb = publicationsDb.filter((e) =>
			e.event.toLowerCase().includes(event.toString().toLowerCase())
		);
		return publicationsDb;
	} catch (e) {
		console.log(`Error function filterByEvent: ${e}`);
	}
};

const getPublications = async (req, res) => {
	const { name, location, event } = req.query;
	try {
		publicationsDb = await Publication.findAll({
			include: [
				{ model: Review, required: false, include: User },
				{ model: User, required: false }
			]
		});

		if (name || location || event) {
			var info;
			if (name) {
				info = await filterByName(name);
			}
			if (location) {
				info = await filterByLocation(location);
			}
			if (event) {
				info = await filterByEvent(event);
			}

			return res.status(200).send(info);
		} else {
			res.status(200).json(publicationsDb);
		}
	} catch (e) {
		console.log(e);
	}
};

const getPublicationsUser = async (req, res) => {
	try {
		const { id } = req.params;
		const userPublications = await Publication.finByPk(id);
		res.status(200).send(userPublications);
	} catch (error) {
		res.send(error);
	}
};

const getPublicationDetail = async (req, res) => {
	const { id } = req.params;
	const idUUID = id.length;
	console.log(idUUID);
	try {
		if (idUUID !== 36) {
			res.status(200).json('codigo de la api');
		} else if (idUUID === 36) {
			const publicationDetail = await Publication.findAll({
				where: { id: id },
				include: Review
			});
			publicationDetail.length > 0
				? res.status(200).json(publicationDetail)
				: res.status(500).send('No existe este codigo');
		}
	} catch (error) {
		console.log(error.message);
	}
};

const getIdProvincia = async (req, res) => {
	try {
		const barrios = await axios(
			`https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre`
		);
		let listOfProvincias = barrios.data.provincias.map((e) => {
			return {
				id: e.id,
				nombre: e.nombre
			};
		});
		res.status(200).json(listOfProvincias);
	} catch (error) {
		res.status(500).send(error.message);
	}
};

const getBarrios = async (req, res) => {
	//Provincias 86-30-78-02 no tienen municipio
	const { idProvincia } = req.params;
	if (idProvincia) {
		try {
			const barrios = await axios(
				`https://apis.datos.gob.ar/georef/api/municipios?provincia=${idProvincia}&campos=nombre&max=426`
			);
			let listOfMunicipios = barrios.data.municipios.map((e) => {
				return {
					nombre: e.nombre
				};
			});
			res.status(200).json(listOfMunicipios);
		} catch (error) {
			res.status(500).send(error.message);
		}
	}
};

module.exports = {
	preload,
	getPublications,
	getPublicationDetail,
	getIdProvincia,
	getBarrios,
	getPublicationsUser
};
