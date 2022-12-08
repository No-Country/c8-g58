import React from 'react';
import styles from './Posts.module.css';

import Logo from '../../assets/imagenes/logo.png';
import comentariosBlanco from '../../assets/imagenes/comentariosBlanco.png';

function Posts({ id, name, image, event, text, location, reviews }) {
	return (
		<>
			<div className="pt-16 text-black flex s:flex-col items-center">
				<div className="flex flex-row justify-evenly items-center w-full">
					<div className="flex flex-col items-center justify-evenly">
						<img className="w-16 rounded-full" src={Logo} alt="Foto Usuario" />
						<p className="text-white">@Moderador</p>
					</div>
					<p className="lg:w-3/4 p-5 bg-gray rounded-3xl text-center text-3xl flex lg:flex-row justify-evenly items-center s:text-lg s:flex-col s:w-1/2">
						<span className="font-bold">{event}</span>
						<span className="s:text-base">en</span>
						<span className="font-bold">{location}</span>
					</p>
				</div>

				<div className="relative m-5 lg:w-11/12">
					<p className=" rounded-3xl  p-5  bg-gray text-black ">{text}</p>
					<button className="absolute w-14 bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante3 rounded-full p-3 lg:top-1/2 right-2 s:top-3/4 s:-right-4 dark:from-Lgradiante1 dark:via-Lgradiante2 dark:to-Lgradiante3">
						<img className="" src={comentariosBlanco} alt="Comentarios" />
					</button>
				</div>
				{reviews?.map((e, id) => (
					<div id={id} className="relative m-5 lg:w-11/12">
						<p className=" rounded-3xl  p-5  bg-gray text-black ">
							{e.user.name ? e.user.name : '@Moderador'}{' '}
						</p>
						<p className=" rounded-3xl  p-5  bg-gray text-black ">
							{e.comment}
						</p>
					</div>
				))}

				<span className="bg-black h-0.1 w-full block mt-16"></span>
			</div>
		</>
	);
}

export default Posts;
