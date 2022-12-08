const { User } = require('../../db');

const getUsers = async (req, res) => {
	try {
		const usersDb = await User.findAll({});
		res.status(200).json(usersDb);
	} catch (error) {
		res.status(500).send('No hay Usuarios');
	}
};

const getUserDetail = async (req, res) => {
	const { email } = req.params;
	try {
		if (email) {
			const userDetail = await User.findAll({
				where: { email: email }
			});
			userDetail.length > 0
				? res.status(200).json(userDetail)
				: res.status(500).send('No existe este usuario');
		}
	} catch (error) {
		console.log(error.message);
	}
};

module.exports = {
	getUsers,
	getUserDetail
};
