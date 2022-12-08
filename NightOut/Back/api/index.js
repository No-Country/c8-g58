const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { preload } = require('./src/controllers/publication/getPublication.js');
const { Publication } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: false }).then(async () => {
	const data = await Publication.findAll();
	if (!data.length) {
		await preload();
	}
	server.listen(process.env.PORT || 3001, () => {
		console.log('Listening at', process.env.PORT); // eslint-disable-line no-console
	});
});
