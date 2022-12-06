const { Router } = require('express');
const router = Router();

const { getUsers, getUserDetail } = require('../controllers/user/getUser');
const { postUser } = require('../controllers/user/postUser');
const {
	putName,
	putEmail,
	putPassword,
	putImage,
	putCel
} = require('../controllers/user/putUser');
const { deleteUser } = require('../controllers/user/deleteUser');
const { nodemailer } = require('../controllers/user/nodemailer');

//Get Users
router.get('/', getUsers);

//Get Users Detail
router.get('/detail/:id', getUserDetail);

//Put Name
router.put('/name/:id', putName);

//Put Email
router.put('/email/:id', putEmail);

//Put Password
router.put('/password/:id', putPassword);

//Put Image
router.put('/image/:id', putImage);

//Put Cel
router.put('/cel/:id', putCel);

//Delete User
router.delete('/:id', deleteUser);

//Post User
router.post('/', postUser);

router.post('/contacto', nodemailer);

module.exports = router;
