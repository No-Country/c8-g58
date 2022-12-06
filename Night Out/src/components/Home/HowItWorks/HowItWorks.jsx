import React from "react";
import { useTranslation } from 'react-i18next'

function HowItWorks() {
  const [t] = useTranslation('global')
  return (
    <div className="flex flex-col items-center colorBlanco w-full lg:mb-14">
      <h2 className="bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante4 rounded-3xl font-bold px-48 py-10 2xl:text-4xl s:px-10 s:text-3xl dark:from-Lgradiante1 dark:via-Lgradiante2 dark:to-Lgradiante4">
        {t("hiw.How it works")}
      </h2>
      <div className="flex flex-col flex-nowrap justify-around gap-x-44 mt-8 mb-8 s:w-full ">
        <div className="flex md:flex-row justify-evenly items-center s:flex-col">
          <div className="bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante3 rounded-3xl md:flex md:flex-col md:items-start md:justify-start md:p-5 md:w-96 md:m-5 md:h-80 s:flex s:flex-col s:items-center s:justify-center s:p-0 s:w-full s:m-0 s:mt-5 s:mb-5 dark:from-Lgradiante1 dark:via-Lgradiante2 dark:to-Lgradiante3 ">
            <h3 className=" font-semibold my-3 2xl:text-4xl p-3 s:text-3xl">{t("hiw.First step")}</h3>
            <p className="2xl:text-xl p-3 s:text-center md:text-start s:text-lg s:mb-3">
              <span className=" font-semibold">{t("hiw.Verify your identity")}.</span>{" "}
              <br /> {t("hiw.Create your profile")}
            </p>
          </div>
          <div className="bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante3 rounded-3xl md:flex md:flex-col md:items-start md:justify-start md:p-5 md:w-96 md:m-5 md:h-80 s:flex s:flex-col s:items-center s:justify-center s:p-0 s:w-full s:m-0 s:mt-5 s:mb-5 dark:from-Lgradiante1 dark:via-Lgradiante2 dark:to-Lgradiante3 ">
            <h3 className=" font-semibold my-3 2xl:text-4xl p-3 s:text-3xl">{t("hiw.Second step")}</h3>
            <p className="2xl:text-xl p-3 s:text-center md:text-start s:text-lg s:mb-3">
              <span className=" font-semibold">{t("hiw.Set up your profile")}</span>{" "}
              <br /> {t("hiw.Upload pictures...")}
            </p>
          </div>
        </div>
        <div className="flex md:flex-row justify-evenly items-center s:flex-col">
        <div className="bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante3 rounded-3xl md:flex md:flex-col md:items-start md:justify-start md:p-5 md:w-96 md:m-5 md:h-80 s:flex s:flex-col s:items-center s:justify-center s:p-0 s:w-full s:m-0 s:mt-5 s:mb-5 dark:from-Lgradiante1 dark:via-Lgradiante2 dark:to-Lgradiante3 ">
            <h3 className=" font-semibold my-3 2xl:text-4xl p-3 s:text-3xl">{t("hiw.Third step")}</h3>
            <p className="2xl:text-xl p-3 s:text-center md:text-start s:text-lg s:mb-3">
              <span className=" font-semibold">{t("hiw.Connect.")}</span> <br /> {t("hiw.Find your next...")}
            </p>
          </div>
          <div className="bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante3 rounded-3xl flex flex-row items-center md:w-96 md:h-80 md:m-5 overflow-hidden s:m-0 s:p-0 s:w-full s:mt-5 s:mb-5 dark:from-Lgradiante1 dark:via-Lgradiante2 dark:to-Lgradiante3 ">
            <img src="src\assets\imagen1.png" alt="imagen" className="w-8/12" />
            <h3 className=" font-semibold text-4xl text-center s:text-3xl">
            {t("hiw.Easy, right?")}
            </h3>
          </div>
        </div>
      </div>
      <img className=" opacity-70 lg:w-1/2 s:w-1/2 s:h-10 xl:w-1/3 2xl:w-1/4" src="src\assets\flechas.png" alt="imagen flechas" />
    </div>
  );
}

export default HowItWorks;
