import React from "react";
import { useTranslation } from 'react-i18next';

function Footer() {
  const [t] = useTranslation('global')
  return (
    <footer className="text-white flex flex-col items-center justify-evenly ">
      <span className="mt-8 h-0.1 bg-gray w-4/5"></span>
      <h2 className="font-semibold text-2xl mt-8">Useful Links</h2>
      <ul className="list-none flex md:flex-row font-semibold text-2xl mt-10 s:flex-col s:text-center s:text-xl">
        <li className="px-10 s:py-1">
          <a href="#">{t("footer.About us")}</a>
        </li>
        <li className="px-10 s:py-1">
          <a href="#">{t("footer.Team")}</a>
        </li>
        <li className="px-10 s:py-1">
          <a href="#">{t("footer.Services")}</a>
        </li>
        <li className="px-10 s:py-1">
          <a href="#">{t("footer.Contact Us")}</a>
        </li>
      </ul>
      <div className="xl:w-1/3 mt-16 flex flex-col items-center s:w-4/5 s:text-center md:w-3/5 2xl:w-1/4">
        <h2 className="text-2xl font-medium mb-3 s:text-xl">
        {t("footer.Subscribe to our newsletter!")}
        </h2>
        <form
          action=""
          className="flex md:flex-row items-center w-full s:flex s:flex-col"
          autoComplete="off"
        >
          <div className="xl:w-3/4 flex flex-row flex-nowrap bg-gray md:rounded-r-none s:rounded-full s:w-full s:pr-5">
            <img className="h-8 m-3" src="src\assets\sobre.svg" alt="email" />
            <input
              type="email"
              name="mail"
              id="mail"
              className="w-full colorNegro rounded-r-full outline-none text-xl bg-gray s:text-xl"
            />
          </div>
          <button
            className="xl:w-1/4 h-14 bg-gradient-to-r from-gradiante3 via-gradiante2 to-gradiante1 pl-6 pr-6 flex justify-center items-center md:rounded-l-none group s:rounded-full s:w-1/3 s:mt-5 md:mt-0 dark:from-Lgradiante1 dark:via-Lgradiante2 dark:to-Lgradiante3"
            type="submit"
          >
            <img
              className="w-10 group-hover:animate-pulse"
              src="src\assets\flechaBlancaDerecha.png"
              alt="Subscribe"
            />
          </button>
        </form>
      </div>
      <div className="flex flex-col items-center justify-center mt-16 mb-8">
        <div className="flex flex-row items-center justify-center">
          <img className="w-14 mr-3" src="src\assets\logo.png" alt="logo" />
          <h2 className="font-semibold text-2xl">{t("footer.Night Out")}</h2>
        </div>
        <h3 className="text-gray font-semibold text-md">
          {t("footer.© All Rights Reserved")}
        </h3>
      </div>
    </footer>
  );
}

export default Footer;
