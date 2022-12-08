import axios from 'axios';
// const ROUTE = 'http://localhost:3001/';
export const GET_USER = 'GET_USER';
export const GET_USER_DETAIL = 'GET_USER_DETAIL';
export const POST_USER = 'POST_USER';
export const GET_PUBLICATIONS = 'GET_PUBLICATIONS';
export const GET_PUBLICATIONS_USER = 'GET_PUBLICATIONS_USER';
export const GET_PUBLICATION_DETAIL = 'GET_PUBLICATION_DETAIL';
export const FILTER_BY_QUERY = 'FILTER_BY_QUERY';
export const POST_PUBLICATIONS = 'POST_PUBLICATIONS';
export const GET_PROVINCES = 'GET_PROVINCES';
export const GET_MUNICIPALITIES = 'GET_MUNICIPALITIES';
export const POST_REVIEW = 'POST_REVIEW';
export const DELETE_REVIEW = 'DELETE_REVIEW';

const getUser = () => {
	return async function (dispatch) {
		let user = await axios.get(`/users`);
		return dispatch({
			type: GET_USER,
			payload: user.data
		});
	};
};

const getUserDetail = (email) => {
	return async function (dispatch) {
		let userDetail = await axios.get(`/users/detail/${email}`);

		return dispatch({
			type: GET_USER_DETAIL,
			payload: userDetail.data
		});
	};
};

const postUser = (payload) => {
	return async function (dispatch) {
		await axios.post(`/users`, payload);
		return dispatch({
			type: POST_USER,
			payload
		});
	};
};

const putUser = (option, id, data) => {
	return async function (dispatch) {
		await axios.put(`/users/${option}/${id}`, data);
	};
};

const putAdmin = (id) => {
	return async function (dispatch) {
		await axios.put(`/users/admin/${id}`);
	};
};

const putBan = (id) => {
	return async function (dispatch) {
		await axios.put(`/users/banner/${id}`);
	};
};

const deleteUser = (id) => {
	return async function (dispatch) {
		await axios.delete(`/users/${id}`);
	};
};

const getPublications = () => {
	return async function (dispatch) {
		let publications = await axios.get(`/publications`);
		return dispatch({
			type: GET_PUBLICATIONS,
			payload: publications.data
		});
	};
};

const getPublicationsUser = (id) => {
	return async function (dispatch) {
		let userPublications = await axios.get(`/publications/user/${id}`);
		return dispatch({
			type: GET_PUBLICATIONS_USER,
			payload: userPublications.data
		});
	};
};

const getPublicationDetail = (id) => {
	return async function (dispatch) {
		let publicationDetail = await axios.get(`/publications/detail/${id}`);
		return dispatch({
			type: GET_PUBLICATION_DETAIL,
			payload: publicationDetail.data
		});
	};
};

const filterByQuery = (params) => {
	return async function (dispatch) {
		let filterPublications = await axios.get(`/publications?${params}`);
		return dispatch({
			type: FILTER_BY_QUERY,
			payload: filterPublications.data
		});
	};
};

const postPublications = (payload) => {
	return async function (dispatch) {
		await axios.post(`/publications`, payload);
		return dispatch({
			type: POST_PUBLICATIONS,
			payload
		});
	};
};

const putPublications = (option, id, data) => {
	return async function (dispatch) {
		await axios.put(`/publications/${option}/${id}`, data);
	};
};

const deletePublication = (id) => {
	return async function (dispatch) {
		await axios.delete(`/publications/${id}`);
	};
};

const getProvinces = () => {
	return async function (dispatch) {
		let allProvinces = await axios.get(`/publications/idprovincia`);
		return dispatch({
			type: GET_PROVINCES,
			payload: allProvinces.data
		});
	};
};

const getMunicipalities = (id) => {
	return async function (dispatch) {
		let allMunicipalities = await axios.get(`/publications/barrios/${id}`);
		return dispatch({
			type: GET_MUNICIPALITIES,
			payload: allMunicipalities.data
		});
	};
};

const postReview = (payload) => {
	return async function (dispatch) {
		await axios.post(`/reviews`, payload);
	};
};

const deleteReview = (id) => {
	return async function (dispatch) {
		await axios.delete(`/reviews/${id}`);
	};
};

export {
	getUser,
	getUserDetail,
	postUser,
	putUser,
	putAdmin,
	putBan,
	deleteUser,
	getPublications,
	getPublicationsUser,
	getPublicationDetail,
	filterByQuery,
	postPublications,
	putPublications,
	deletePublication,
	getProvinces,
	getMunicipalities,
	postReview,
	deleteReview
};
