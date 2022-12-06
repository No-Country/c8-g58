import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import { useTranslation } from "react-i18next";

function Filters() {
  const { FiltrosMostrado, setFiltrosMostrado } = useContext(GlobalContext);
  const mostrarFiltros = () => {
    if (FiltrosMostrado === true) {
      setFiltrosMostrado(false);
      console.log("Ocultando Filtros");
    } else {
      setFiltrosMostrado(true);
      console.log("Mostrando Filtros");
    }
    if (cambioFiltros === true) {
      setCambioFiltros(false);
    }
  };
  const [t] = useTranslation("global");

  const { cambioFiltros, setCambioFiltros} = useContext(GlobalContext)
  const { FiltroEvento, setFiltroEvento, FiltroLugar, setFiltroLugar } =
    useContext(GlobalContext);

  const handleEvento = (Event) => {
    setFiltroEvento(Event.target.value);
    if (cambioFiltros === false) {
      setCambioFiltros(true);
    }
  };

  const handleLugar = (Place) => {
    setFiltroLugar(Place.target.value);
    if (cambioFiltros == false) {
      setCambioFiltros(true);
    }
  };

  return (
    <div
      className={
        FiltrosMostrado === false
          ? "bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante3 flex flex-col justify-evenly items-center p-5 w-4/5 absolute -z-10 s:w-full s:px-0 dark:from-Lgradiante1 dark:via-Lgradiante2 dark:to-Lgradiante3"
          : "bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante3 flex flex-col justify-evenly items-center p-5 w-4/5 absolute z-10 s:w-full s:px-0 dark:from-Lgradiante1 dark:via-Lgradiante2 dark:to-Lgradiante3"
      }
    >
      <div className="flex flex-row items-center justify-between w-full s:px-5">
        <h2 className="text-2xl text-white s:text-xl">
          {t("filters.Filters")}
        </h2>
        <div className="flex flex-row text-white items-center justify-around">
          <p className="text-xl pr-5 s:text-lg">
            <span>{FiltroEvento}</span> en <span>{FiltroLugar}</span>
          </p>
          <button className="w-8" onClick={mostrarFiltros}>
            <img src="src\assets\filtroBlanco.png" alt="filtros" />
          </button>
        </div>
      </div>
      <div className="flex md:flex-row items-center w-full justify-evenly pt-5 text-white bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante3 s:flex-col s:w-full dark:from-Lgradiante1 dark:via-Lgradiante2 dark:to-Lgradiante3">
        <select
          className="w-full text-center text-xl bg-gradient-to-r md:from-gradiante1 md:to-gradiante2 appearance-none s:from-gradiante1 s:via-gradiante2 s:to-gradiante3 s:mb-2 md:mb-0 md:dark:from-Lgradiante1 md:dark:to-Lgradiante2 s:dark:from-Lgradiante1 s:dark:via-Lgradiante2 s:dark:to-Lgradiante3"
          onChange={(e) => handleEvento(e)}
        >
          <option
            className="text-black"
            value=""
            selected="true"
            disabled="disabled"
          >
            {" "}
            {t("filters.Event")}
          </option>
          <option className="text-black" value="Bar">
            Bar
          </option>
          <option className="text-black" value="Boliche">
            Boliche
          </option>
          <option className="text-black" value="Concierto">
            Concierto
          </option>
          <option className="text-black" value="Otro Evento">
            {t("filters.Others")}
          </option>
        </select>
        <select
          className="w-full text-center text-xl bg-gradient-to-r md:from-gradiante2 md:to-gradiante3 appearance-none s:from-gradiante1 s:via-gradiante2 s:to-gradiante3 s:mt-2 md:mt-0 md:dark:from-Lgradiante2 md:dark:to-Lgradiante3 s:dark:from-Lgradiante1 s:dark:via-Lgradiante2 s:dark:to-Lgradiante3"
          onChange={(e) => handleLugar(e)}
        >
          <option
            className="text-black"
            value=""
            selected="true"
            disabled="disabled"
          >
            {" "}
            {t("filters.Place")}
          </option>
          <option className="text-black" value="Palermo">
            Palermo
          </option>
          <option className="text-black" value="Recoleta">
            Recoleta
          </option>
          <option className="text-black" value="San Isidro">
            San Isidro
          </option>
          <option className="text-black" value="Tigre">
            Tigre
          </option>
          <option className="text-black" value="Otro Lugar">
            {t("filters.Others")}
          </option>
        </select>
      </div>

      <button
        className="bg-gray p-3 text-2xl rounded-full mt-5 w-2/6 hover:bg-white s:w-1/2 md:w-1/3 xl:w-1/4 relative"
        onClick={mostrarFiltros}
      >
        { cambioFiltros === true ? (
          <div className="absolute h-6 w-6 right-0 -top-2 flex items-center justify-center">
            <span class="animate-ping absolute inline-flex h-4 w-4 rounded-full opacity-75 z-20 bg-gradiante4"></span>
            <span class="block rounded-full h-4 w-4 bg-sky-500 z-20 bg-lila"></span>
          </div>
        ) : (
          ""
        )}
        {t("filters.Search")}
      </button>
    </div>
  );
}

export default Filters;
