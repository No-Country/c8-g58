const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { preload } = require('./src/controllers/publication/getPublication.js');
const { Publication } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {
	const data = await Publication.findAll();
	if (!data.length) {
		await preload();
	}
	server.listen(3001, () => {
		console.log('%s listening at 3001'); // eslint-disable-line no-console
	});
});
