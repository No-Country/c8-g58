import React from "react";
import Posts from "../Posts/Posts";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import flechaBlancaDerecha from '../../assets/imagenes/flechaBlancaDerecha.png'
import Logo from '../../assets/imagenes/logo.png';
import PortadaPrueba from '../../assets/imagenes/PortadaPrueba.png'

function User() {
  const [t] = useTranslation("global");
  return (
    <div className="text-white w-4/5 s:w-full">
      <div className="bg-gradient-to-b from-gradiante1 via-gradiante2 to-gradiante4 mb-10 rounded-b-3xl overflow-hidden relative dark:from-Lgradiante1 dark:via-Lgradiante2 dark:to-Lgradiante4">
        <div className="bg-black absolute top-3 left-3 rounded-full bg-opacity-50 p-2">
          <Link to="/Feed">
            <img
              className="w-10 rotate-180 s:w-8"
              src={flechaBlancaDerecha}
              alt="Feed"
            />
          </Link>
        </div>
        <img
          className="w-full rounded-b-3xl"
          src={PortadaPrueba}
          alt="Portada"
        />
        <div className="p-8 relative">
          <div className="flex flex-row absolute 2xl:-top-24 w-11/12 items-end justify-between s:-top-10 lg:-top-16">
            <div className="flex flex-row items-end">
              <img
                src={Logo}
                alt="Foto Perfil"
                className="rounded-full 2xl:h-40 s:h-24 lg:h-32"
              />
              <div className=" font-medium text-xl text-center ml-5">
                <h2 className="s:text-lg">Moderador</h2>
                <p className="s:text-lg">@Moderador</p>
              </div>
            </div>
          </div>
          <div className="mt-20 s:mt-10">
            <h2 className="text-2xl font-semibold s:text-xl">
              {t("user.Description")}
            </h2>
            <p className="text-lg pt-5 s:text-base">Moderador de Night Out</p>
          </div>
        </div>
      </div>
      <div className="bg-violeta rounded-t-3xl mx-auto dark:bg-Lvioleta">
        <h2 className="text-2xl bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante3 p-3 rounded-t-3xl pl-5 s:text-xl dark:from-Lgradiante1 dark:via-Lgradiante2 dark:to-Lgradiante3">
          {t("user.Posts")}
        </h2>
        
      </div>
    </div>
  );
}

export default User;
