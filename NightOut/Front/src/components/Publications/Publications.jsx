import React, { useEffect } from "react";
import Posts from "../Posts/Posts";
import { useSelector, useDispatch } from "react-redux";
import { getPublications } from "../../redux/actions";
import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import Postear from "../Postear/Postear";
import { UserAuth } from "../firebase/context/AuthContext";
import { useTranslation } from "react-i18next";

import filtroBlanco from '../../assets/imagenes/filtroBlanco.png'


function Publications() {
  const { allPublications } = useSelector((state) => state);
  const dispatch = useDispatch();

  
useEffect(() => {
    dispatch(getPublications());
  }, []);


  const { FiltrosMostrado, setFiltrosMostrado } = useContext(GlobalContext);
  const mostrarFiltros = () => {
    if (FiltrosMostrado === true) {
      setFiltrosMostrado(false);
      console.log("Ocultando Filtros");
    } else {
      setFiltrosMostrado(true);
      console.log("Mostrando Filtros");
    }
  };
  const [t] = useTranslation('global')
  const { user } = UserAuth();

  const { FiltroEvento, setFiltroEvento, FiltroLugar, setFiltroLugar } = useContext(GlobalContext)

  return (
    <>
      <div className="w-4/5 bg-lila s:w-full dark:bg-Llila h-screen">
        <div className="flex flex-row justify-between items-center w-full bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante3 p-5 dark:from-Lgradiante1 dark:via-Lgradiante2 dark:to-Lgradiante3">
          <h2 className="text-white text-2xl s:text-xl">{t("header.home")}</h2>
          <div className="flex flex-row text-white items-center justify-around">
            <p className="text-xl pr-5 s:text-lg">
              <span>{FiltroEvento}</span> en <span>{FiltroLugar}</span>
            </p>
            <button className="w-8" onClick={mostrarFiltros}>
              <img src={filtroBlanco} alt="filtros" />
            </button>
          </div>
        </div>
        {user ? <Postear /> : ""}

        {!allPublications.length ? (
            <h1 className="font-bold text-white text-2xl text-center my-5">{t("publications.Loading")}</h1>
        ) : (
          allPublications.map((p, i) => (
            <div key={i}>
              <Posts
                id={p.id}
                name={p.name}
                image={p.image}
                event={p.event}
                text={p.text}
                location={p.location}
              />
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Publications;
