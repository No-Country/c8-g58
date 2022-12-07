const { User, Publication, Review } = require('../../db');

const postReview = async (req, res) => {
	try {
		const { userId, publicationId, comment, like } = req.body;

		const userDb = await User.findByPk(userId);
		const publicationDb = await Publication.findByPk(publicationId);
		if (publicationDb && userDb) {
			await Review.create({ like, comment, userId, publicationId });
			res.status(200).send('Posted');
		} else {
			res.status(200).send('Post not found');
		}
	} catch (error) {
		res.status(500).send(error.message);
	}
};

module.exports = {
	postReview
};
