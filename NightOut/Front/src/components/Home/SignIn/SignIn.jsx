import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { getUserDetail } from '../../../redux/actions';

import { UserAuth } from '../../firebase/context/AuthContext';
import { Alerts } from '../../alerts/Alerts';

import User from '../../../assets/imagenes/user.svg';
import candado from '../../../assets/imagenes/candado.svg';

function validate(userSI) {
	let error = {};

	if (!userSI.email) error.email = 'Ingrese un email';

	if (!userSI.password) error.password = 'Ingrese una contraseña';

	return error;
}

function SignIn() {
	const [t] = useTranslation('global');
	const { signInEmailPassword, user } = UserAuth();
	const { correct, wrong } = Alerts();

	const detailsUser = useSelector((state) => state.userDetail);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [userSI, setUserSI] = useState({
		email: '',
		password: ''
	});
	const [error, setError] = useState('');

	const handleChange = (e) => {
		setUserSI({
			...userSI,
			[e.target.name]: e.target.value
		});
		setError(
			validate({
				...userSI,
				[e.target.name]: e.target.value
			})
		);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (Object.entries(error).length === 0) {
			try {
				const email = userSI.email;
				const password = userSI.password;
				console.log(email);
				console.log(password);
				const userSignIn = await signInEmailPassword(email, password);
				await dispatch(getUserDetail(userSignIn.user.email));
				let text = `${t('signIn.correct')} ${detailsUser[0].name}`;
				await correct(text);
				localStorage.setItem('id', userSignIn.user.uid);
				localStorage.setItem('email', email);
				setUserSI({
					email: '',
					password: ''
				});
				navigate('/feed');
			} catch (error) {
				if (error.code === 'auth/wrong-password') {
					const text = `${t('signIn.wrong-password')}`;
					wrong(text);
				}
				if (error.code === 'auth/user-not-found') {
					const text = `${t('signIn.user-not-found')}`;
					wrong(text);
				}
			}
		} else if (error.email) {
			const text = `${t('signIn.not-email')}`;
			wrong(text);
		} else if (error.password) {
			const text = `${t('signIn.not-password')}`;
			wrong(text);
		}
	};

	const userRegistrated = () => {
		const text = 'Ya estas registrado';
		wrong(text);
	};

	useEffect(() => {}, []);

	return (
		<div
			className="flex flex-col justify-evenly items-center colorBlanco w-full mb-8 "
			id="logear"
		>
			<h2 className="bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante4 rounded-3xl font-bold px-48 py-10 md:text-3xl s:px-10 s:text-center s:mb-5 s:mt-5 s:text-2xl dark:from-Lgradiante1 dark:via-Lgradiante2 dark:to-Lgradiante3">
				{t('signin.What now?')}
			</h2>
			<div className="bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante3 rounded-3xl lg:p-10 flex flex-col justify-evenly items-center lg:w-3/4 mb-10 s:w-full s:p-5 xl:w-1/2 2xl:w-1/3 dark:from-Lgradiante1 dark:via-Lgradiante2 dark:to-Lgradiante3">
				<h2 className="font-bold text-4xl s:text-2xl md:text-3xl">
					{t('signin.Log in!')}
				</h2>
				<form
					className="flex flex-col w-full "
					action=""
					onSubmit={handleSubmit}
					autoComplete="on"
				>
					<label
						className="md:text-xl font-bold m-2 ml-5 s:text-lg"
						htmlFor="username"
					>
						{t('signin.Email')}
					</label>
					<div className="w-full flex flex-row flex-nowrap bg-gray rounded-full mb-5">
						<img className="h-8 m-3" src={User} alt="imagen usuario" />
						<input
							className="colorNegro w-full rounded-r-full outline-none md:text-xl bg-gray s:text-lg"
							type="email"
							placeholder=""
							name="email"
							onChange={(e) => handleChange(e)}
						/>
					</div>
					<label
						className="md:text-xl font-bold m-2 ml-5 s:text-lg"
						htmlFor="password"
					>
						{t('signin.Password')}
					</label>
					<div className="w-full flex flex-row flex-nowrap bg-gray rounded-full  mb-5">
						<img className="h-8 m-3" src={candado} alt="imagen contraseña" />
						<input
							className="colorNegro w-full rounded-r-full outline-none md:text-xl bg-gray s:text-lg"
							type="password"
							placeholder=""
							name="password"
							onChange={(e) => handleChange(e)}
						/>
					</div>
					<button className="bg-gray rounded-full colorNegro h-8 md:text-xl mx-auto p-7 text-center flex justify-center items-center font-bold hover:bg-white s:text-lg">
						{t('signin.Sign in')}
					</button>
				</form>
			</div>
			<div className="bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante4 rounded-3xl flex flex-col justify-evenly items-center lg:w-3/4 p-10 text-center s:w-full s:p-5 xl:w-1/2 2xl:w-1/3 dark:from-Lgradiante1 dark:via-Lgradiante2 dark:to-Lgradiante3">
				<h2 className="font-bold text-4xl mb-10 s:text-2xl md:text-3xl">
					{t("signin.Don't have an account yet?")}
				</h2>
				<h2 className="font-bold text-4xl mb-10 s:text-2xl md:text-3xl">
					{t('signin.Sign in!')}
				</h2>
				<button className="bg-gray rounded-full colorNegro h-8 md:text-xl mx-auto p-7 text-center flex justify-center items-center font-bold animate-pulse s:text-lg">
					{user ? (
						<Link to="/feed">{t("signin.Let's go!")}</Link>
					) : (
						<Link to="/Sign-up">{t("signin.Let's go!")}</Link>
					)}
				</button>
			</div>
		</div>
	);
}

export default SignIn;
