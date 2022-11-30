const { User } = require('../../db');

const putName = async (req, res) => {
	const { id } = req.params;
	const { name } = req.body;
	try {
		const user = await User.findByPk(id);
		user.name = name;
		await user.save();
		res.status(200).json(user);
	} catch (error) {
		res.status(500).send(error.message);
	}
};

const putEmail = async (req, res) => {
	const { id } = req.params;
	const { email } = req.body;
	try {
		const user = await User.findByPk(id);
		user.email = email;
		await user.save();
		res.status(200).json(user);
	} catch (error) {
		res.status(500).send(error.message);
	}
};

const putPassword = async (req, res) => {
	const { id } = req.params;
	const { password } = req.body;
	try {
		const user = await User.findByPk(id);
		user.password = password;
		await user.save();
		res.status(200).json(user);
	} catch (error) {
		res.status(500).send(error.message);
	}
};

const putImage = async (req, res) => {
	const { id } = req.params;
	const { image } = req.body;
	try {
		const user = await User.findByPk(id);
		user.image = image;
		await user.save();
		res.status(200).json(user);
	} catch (error) {
		res.status(500).send(error.message);
	}
};

const putCel = async (req, res) => {
	const { id } = req.params;
	const { cel } = req.body;
	try {
		const user = await User.findByPk(id);
		user.cel = cel;
		await user.save();
		res.status(200).json(user);
	} catch (error) {
		res.status(500).send(error.message);
	}
};

const putBanned = async (req, res) => {
	const { id } = req.params;
	try {
		const userDb = await User.findByPk(id);
		await userDb.update({
			...userDb,
			banned: userDb.banned === false ? true : false
		});
	} catch (error) {
		res.status(500).send(error.message);
	}
};

const putAdmin = async (req, res) => {
	const { id } = req.params;
	try {
		const userDb = await User.findByPk(id);
		await userDb.update({
			...userDb,
			admin: userDb.admin === false ? true : false
		});
	} catch (error) {
		res.status(500).send(error.message);
	}
};

module.exports = {
	putName,
	putEmail,
	putPassword,
	putImage,
	putCel,
	putBanned,
	putAdmin
};
