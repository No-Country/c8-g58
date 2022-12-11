const app = require('./src/app.js');
const { conn } = require('./src/db.js');
const { preload } = require('./src/controllers/publication/getPublication.js');
const { Publication } = require('./src/db.js');
const { PORT } = process.env || 3001;

conn.sync({ force: false }).then(async () => {
	const data = await Publication.findAll();
	if (!data.length) {
		await preload();
	}

	app.listen(PORT, () => {
		console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
	});
});
