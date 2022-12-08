import React, { useState, useEffect } from 'react';
import { postPublications, getUserDetail } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Logo from '../../assets/imagenes/logo.png';
import flechaBlanca from '../../assets/imagenes/flechaBlanca.png';
import { UserAuth } from '../firebase/context/AuthContext';

function Postear() {
	const [t] = useTranslation('global');
	const dispatch = useDispatch();
	const userDetail = useSelector((state) => state.userDetail);
	const { user } = UserAuth();
	console.log(userDetail);
	useEffect(() => {
		if (user) {
			dispatch(getUserDetail(user.email));
		}
	}, [user]);

	const [data, setData] = useState({
		event: '',
		text: '',
		location: ''
	});

	const [error, setError] = useState({
		event: '',
		text: '',
		location: ''
	});

	function validate(state) {
		let aux = {};
		for (const i in state) {
			if (!state[i]) {
				aux[i] = `${i} es requerido`;
			} else {
				aux[i] = ``;
			}
		}
		return aux;
	}

	function handleChange(e) {
		setData((prevState) => {
			const newState = {
				...prevState,
				[e.target.name]: e.target.value
			};
			setError(validate(newState));
			return newState;
		});
	}

	const handleOnSubmit = async (e) => {
		e.preventDefault();
		if (!error.event && !error.text && !error.location) {
			console.log({ ...data, userId: userDetail.id });
			dispatch(postPublications({ ...data, userId: userDetail.id }));
			setData({
				event: '',
				text: '',
				location: ''
			});
		}
	};
	return (
		<>
			<form onSubmit={handleOnSubmit}>
				<div className=" p-5 mb-3 s:px-3 md:px-5">
					<div className="flex flex-row justify-evenly mb-5 items-center">
						<div>
							<img src={Logo} alt="foto perfil" className="w-16 rounded-full" />
							<p className="text-white ">{userDetail[0].name}</p>
						</div>

						<div className="bg-gray rounded-3xl w-3/4 p-5 flex lg:flex-row items-center text-xl s:flex-col">
							<select
								name="event"
								onChange={handleChange}
								className="w-full bg-gray outline-none text-center border-none appearance-none font-semibold"
								defaultValue="default"
							>
								<option value="default" disabled="disabled" hidden>
									{' '}
									{t('postear.Select event')}
								</option>
								<option value="bar">Bar</option>
								<option value="boliche">Boliche</option>
								<option value="concierto">Concierto</option>
								<option value="otroEvento">{t('filters.Others')}</option>
							</select>
							<p>en</p>
							<select
								name="location"
								onChange={handleChange}
								className="w-full bg-gray outline-none text-center appearance-none font-semibold"
								defaultValue="default"
							>
								<option value="default" disabled="disabled" hidden>
									{' '}
									{t('postear.Select place')}
								</option>
								<option value="palermo">Palermo</option>
								<option value="recoleta">Recoleta</option>
								<option value="sanIsidro">San Isidro</option>
								<option value="tigre">Tigre</option>
								<option value="otroLugar">{t('filters.Others')}</option>
							</select>
						</div>
					</div>
					<div className="relative">
						<textarea
							name="text"
							id="description"
							value={data.text}
							cols="30"
							rows="10"
							placeholder={t('postear.Description')}
							maxLength="100"
							className="w-full rounded-3xl p-5 bg-gray text-black 2xl:max-h-16 resize-none outline-none s:max-h-28"
							onChange={handleChange}
						></textarea>
						<button className="absolute w-14 bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante3 rounded-full p-3 2xl:top-1/2 -right-3 group s:top-3/4 dark:from-Lgradiante1 dark:via-Lgradiante2 dark:to-Lgradiante3">
							<img
								src={flechaBlanca}
								alt="Subir"
								className="group-hover:animate-bounce"
							/>
						</button>
					</div>
				</div>
				<span className="bg-black h-0.1 w-full block"></span>
			</form>
		</>
	);
}

export default Postear;
