const { Router } = require('express');
const router = Router();

const { getPublications, getPublicationByName, getPublicationDetail, getPublicationByLocation, getPublicationByEvent } = require('../controllers/publication/getPublication')
const { postPublication } = require('../controllers/publication/postPublication')
const { putLocation } = require('../controllers/publication/putPublication')
const { deletePublication } = require('../controllers/publication/deletePublication')

//Get all Publications
router.get('/', getPublications);

//Get Publications Detail
router.get('/detail/:id', getPublicationDetail);

//Get Publications Detail
router.get('/nmae/:name', getPublicationByName);

//Get Publications by Location
router.get('/location/:location', getPublicationByLocation);

//Get Publications by Event
router.get('/event/:event', getPublicationByEvent);

//Put Location
router.put('/location/:id', putLocation);

//Delete Publication
router.delete('/:id', deletePublication);

//Post Publication
router.post('/', postPublication);

module.exports = router;