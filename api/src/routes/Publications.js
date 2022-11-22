const { Router } = require('express');
const router = Router();

const {
	getPublications,
	// getPublicationByName,
	getPublicationDetail,

	getIdProvincia,
	getBarrios
	// getPublicationByLocation,
	// getPublicationByEvent
} = require('../controllers/publication/getPublication');
const {
	postPublication
} = require('../controllers/publication/postPublication');
const {
	putLocation,
	putName,
	putImage,
	putText,
	putEvent
} = require('../controllers/publication/putPublication');
const {
	deletePublication
} = require('../controllers/publication/deletePublication');

//Get all Publications
router.get('/', getPublications);

router.get('/idprovincia', getIdProvincia);

router.get('/barrios/:idProvincia', getBarrios);

//Get Publications Detail
router.get('/detail/:id', getPublicationDetail);

router.get('/idprovincia', getIdProvincia);

router.get('/barrios/:idProvincia', getBarrios);

//Get Publications Detail
// router.get('/name/:name', getPublicationByName);

//Get Publications by Location
// router.get('/location/:location', getPublicationByLocation);

//Get Publications by Event
// router.get('/event/:event', getPublicationByEvent);

//Put Location
router.put('/location/:id', putLocation);

//Put Location
router.put('/name/:id', putName);

//Put Location
router.put('/image/:id', putImage);

//Put Location
router.put('/text/:id', putText);

//Put Location
router.put('/event/:id', putEvent);

//Delete Publication
router.delete('/:id', deletePublication);

//Post Publication
router.post('/', postPublication);

module.exports = router;
