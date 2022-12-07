const serverApp = require('./src/app.js');
const { conn } = require('./src/db.js');
const { preload } = require('./src/controllers/publication/getPublication.js');
const { Publication } = require('./src/db.js');
const { PORT } = process.env || 3001;
// Syncing all the models at once.
conn.sync({ force: false }).then(async () => {
	const data = await Publication.findAll();
	if (!data.length) {
		await preload();
	}
<<<<<<< HEAD:api/index.js
	serverApp.listen(3001, () => {
		console.log('%s listening at 3001'); // eslint-disable-line no-console
=======
	server.listen(PORT, () => {
		console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
>>>>>>> main:NightOut/Back/api/index.js
	});
});
