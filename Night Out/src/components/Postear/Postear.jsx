import React from "react";
import { useTranslation } from 'react-i18next';

function Postear() {
  const [t] = useTranslation('global')
  return (
    <div>
      <div className=" p-5 mb-3 s:px-3 md:px-5">
        <div className="flex flex-row justify-evenly mb-5 items-center">
          <div>
            <img
              src="src\assets\candado.svg"
              alt="foto perfil"
              className="w-16 rounded-full"
            />
            <p className="text-white ">Nombre</p>
          </div>
          <div className="bg-gray rounded-3xl w-3/4 p-5 flex lg:flex-row items-center text-xl s:flex-col">
            <select className="w-full bg-gray outline-none text-center border-none appearance-none font-semibold">
              <option value="" selected="true" disabled="disabled" hidden>
                {" "}
                {t("postear.Select event")}
              </option>
              <option value="bar">Bar</option>
              <option value="boliche">Boliche</option>
              <option value="concierto">Concierto</option>
              <option value="otroEvento">{t("filters.Others")}</option>
            </select>
            <p>en</p>
            <select className="w-full bg-gray outline-none text-center appearance-none font-semibold">
              <option value="" selected="true" disabled="disabled" hidden>
                {" "}
                {t("postear.Select place")}
              </option>
              <option value="palermo">Palermo</option>
              <option value="recoleta">Recoleta</option>
              <option value="sanIsidro">San Isidro</option>
              <option value="tigre">Tigre</option>
              <option value="otroLugar">{t("filters.Others")}</option>
            </select>
          </div>
        </div>
        <div className="relative">
          <textarea
            name="descripcion"
            id="description"
            cols="30"
            rows="10"
            placeholder={t("postear.Description")}
            maxLength="100"
            className="w-full rounded-3xl p-5 bg-gray text-black 2xl:max-h-16 resize-none outline-none s:max-h-28"
          ></textarea>
          <button className="absolute w-14 bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante3 rounded-full p-3 2xl:top-1/2 -right-3 group s:top-3/4 dark:from-Lgradiante1 dark:via-Lgradiante2 dark:to-Lgradiante3">
            <img src="src\assets\flechaBlanca.png" alt="Subir" className="group-hover:animate-bounce"/>
          </button>
        </div>
      </div>
      <span className="bg-black h-0.1 w-full block"></span>
    </div>
  );
}

export default Postear;
