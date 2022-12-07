const { Review } = require('../../db');

const deleteReview = async (req, res) => {
	try {
		const { id } = req.params;
		await Review.destroy({
			where: { id: id }
		});
		res.send({ msg: 'review eliminada' });
	} catch (error) {
		res.status(500).send(error.message);
	}
};

module.exports = {
	deleteReview
};
