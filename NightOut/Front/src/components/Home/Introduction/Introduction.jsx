import React from "react";
import { useTranslation } from 'react-i18next';

import imgIntroduction from '../../../assets/imagenes/imgIntroduction.png'
import flechas from '../../../assets/imagenes/flechas.png'

function Introduction() {
  const [t] = useTranslation('global')
  return (
    <div className="colorBlanco flex flex-col justify-around items-center  lg:my-48 scroll-mt-64 snap-end snap-always s:mb-10 s:mt-24 w-full">
      {/*Para el texto, imagen y las flechas para cambiar lo que se ve */}
      <div className="flex md:flex-row justify-around items-center lg:mb-36 s:flex-col s:mb-10 lg:w-3/4">
        {/*Para el texto y la imagen */}
        <div className="flex flex-col w-2/4 s:order-2 s:w-full md:order-1">
          {/*Para el texto */}
          <h2 className="font-bold lg:text-6xl p-6 md:text-4xl s:text-2xl">{t("introduction.The new way to make friends")}</h2>
          <p className="p-6 text-xl md:text-lg s:text-base lg:text-2xl">{t("introduction.Night Out is...")}</p>
        </div>
        <img className="md:h-56 lg:h-60 s:h-auto s:order-1 md:order-2 xl:h-96 " src={imgIntroduction} alt="imagen" />
      </div>
      <img className=" opacity-70 lg:w-1/2 s:w-1/2 s:h-10 xl:w-1/3 2xl:w-1/4" src={flechas} alt="imagen flechas" />
    </div>
  );
}

export default Introduction;
