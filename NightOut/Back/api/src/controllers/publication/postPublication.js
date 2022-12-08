const { Publication, User } = require('../../db');

const postPublication = async (req, res) => {
	try {
		const { userId, text, event, location } = req.body;

		const publicationCreated = await Publication.create({
			text,
			event: event.toLowerCase(),
			location: location.toLowerCase(),
			userId
		});
		res.status(200).json(publicationCreated);
	} catch (error) {
		res.status(500).json(error.message);
	}
};

module.exports = {
	postPublication
};
