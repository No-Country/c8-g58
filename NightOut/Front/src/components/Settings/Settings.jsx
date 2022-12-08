import React, { useState } from "react";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import Language from "../language/Language";
import { UserAuth } from '../firebase/context/AuthContext'
import DarkMode from '../DarkMode/DarkMode'
import { useTranslation } from 'react-i18next'

import Home from '../../assets/imagenes/Home.png'

function Settings() {
  const activeStyle = {
    textDecoration: "underline",
    textColor: "white",
    listStyle: "round",
  };
  const { logOut, user } = UserAuth()

  const [t] = useTranslation('global')

  return (
    <div className="flex lg:flex-row justify-between lg:items-start mt-10 s:flex-col s:items-center 2xl:w-1/2 w-4/5">
      <div className="flex flex-col s:items-center s:w-full lg:w-1/2">
        <Link
          to="/Feed"
          className=" justify-start bg-gradiante2 rounded-full lg:mr-10 lg:mb-10 hover:bg-gradiante3 s:mr-0 s:mb-3 s:px-5 s:w-3/4 md:w-1/2 lg:w-3/4 dark:bg-Lgradiante3 dark:hover:bg-Lgradiante1"
        >
          <div className="flex flex-row items-center justify-around s:justify-center">
            <img src={Home} alt="Home" className="w-8" />
            <h2 className="mt-3 mb-3 text-white s:ml-3">{t("settings.Go Home")}</h2>
          </div>
        </Link>
        <div className="bg-gradiante1 p-5 lg:mr-10 s:mr-0 s:w-3/4 s:text-center s:mb-5 md:w-1/2 lg:w-3/4 dark:bg-Lgradiante1">
          <ul className="text-white">
            { user ? (<>
              <li className="mt-3 mb-3">
              <NavLink
                to="/Settings-User"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                {t("navbar.User")}
              </NavLink>
            </li>
            <span className="bg-gray h-0.1 w-full block"></span></>) : ""}
            <li className="mt-3 mb-3">
              <NavLink
                to="/Settings-Configuration"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                {t("navbar.Settings")}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route
          path="/Settings-User"
          element={
            <div className="bg-gradiante1 text-white w-11/12 dark:bg-Lgradiante1">
              <form
                action=""
                className="flex flex-col justify-evenly items-start m-5"
                autoComplete="off"
              >
                <div className="flex mt-3 mb-3 s:flex-col s:items-start">
                  <label htmlFor="fotoPerfil" className="mr-3">
                    {t("settings.Profile Picture")}
                  </label>
                  <input
                    type="file"
                    name="perfil"
                    id="fotoPerfil"
                    accept="image/*"
                    className="s:w-full"
                  />
                </div>
                <span className="bg-gray h-0.1 w-full block"></span>
                <div className="flex flex-col items-start mt-3 mb-3 w-full">
                  <label htmlFor="usuario" className="mr-3">
                    {t("settings.Username")}
                  </label>
                  <input
                    type="text"
                    placeholder="Username"
                    id="usuario"
                    className="bg-gray p-2 pl-5 pr-5 outline-none text-black w-full rounded-full"
                  />
                </div>
                <span className="bg-gray h-0.1 w-full block"></span>
                <div className="flex flex-col items-start mt-3 mb-3 w-full">
                  <label htmlFor="descripcion" className="mr-3">
                    {t("settings.Description")}
                  </label>
                  <textarea
                    name="descripcion"
                    id="descripcion"
                    cols="30"
                    rows="10"
                    className="resize-none p-2 pl-5 pr-5 outline-none text-black w-full rounded-3xl bg-gray max-h-24"
                  ></textarea>
                </div>
                <span className="bg-gray h-0.1 w-full block"></span>
                <div className="flex mt-3 mb-3 s:flex-col s:items-start">
                  <label htmlFor="fotoPortada" className="mr-3">
                    {t("settings.Portrait Image")}
                  </label>
                  <input
                    type="file"
                    name="portada"
                    id="fotoPortada"
                    accept="image/*"
                    className="s:w-full"
                  />
                </div>
                
                <input
                  type="submit"
                  value="Confirm"
                  className="mt-3 mb-3 bg-gray text-black rounded-full p-5 font-semibold hover:bg-white hover:cursor-pointer pl-10 pr-10 text-center self-center"
                />
              </form>
            </div>
          }
        ></Route>
        <Route
          path="/Settings-Configuration"
          element={
            <div className=" bg-gradiante1 text-white w-11/12 mb-36 lg:min-w-fit dark:bg-Lgradiante1">
              <form
                action=""
                className="flex flex-col justify-evenly items-start m-5"
                autoComplete="off"
              >
                <div className="w-full flex flex-row items-center mt-3 mb-3 py-6">
                  <DarkMode />
                </div>
                <span className="bg-gray h-0.1 w-full block"></span>
                <div className="w-full flex flex-row items-center mt-3 mb-3 py-6">
                  <p className="mr-3">{t("language.change")}:</p>
                  <Language/>
                </div>
              </form>
            </div>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default Settings;
