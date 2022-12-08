import React from "react";
import { useTranslation } from 'react-i18next'

const Language = () => {
const [t, i18n] = useTranslation('global')

  const handleLanguage = (language) => {
    if(language.target.value === 'en') i18n.changeLanguage('en')
    if(language.target.value === 'es') i18n.changeLanguage('es')
    localStorage.setItem('language', language.target.value)
    console.log("Cambiando Lenguaje a " + language.target.value)
  }
  const idioma = localStorage.getItem('language')
// A donde vaya el texto a traducir hay que importar "import { useTranslation } from 'react-i18next'"
// Y crear una constante "const [t] = useTranslation('global')"; i18n es solo para donde este el select de cambio de idioma
// Los textos se modifican en la carpeta translation->en/es->global.json
// Para ponerlos en los componentes solo poner en el lugar donde iria el texto esto "{t('language.change')}" 
//                                                                          (cambiar language.change con el texto adecuado)

  return (
    <>
    <select 
      onChange={(e) => handleLanguage(e)}
      defaultValue={idioma}  
      className="text-black bg-gray p-2 pr-4 pl-4 outline-none border-none rounded-full appearance-none hover:cursor-pointer text-center"
    >
      <option value='en'>EN</option>
      <option value='es'>ES</option>
    </select>
    </>
  )
}

export default Language
