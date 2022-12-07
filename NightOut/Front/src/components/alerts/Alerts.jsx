import React, {useContext, createContext} from 'react'

import Swal from 'sweetalert2'
import gifCorrect from '../../assets/created.gif'
import gifError from '../../assets/errorGif.gif'

import useSound from 'use-sound'
import soundCorrect from '../../assets/sounds/created.mp3'
import soundError from '../../assets/sounds/error.mp3'

import { useTranslation } from 'react-i18next'

const AlertContext = createContext()

export const AlertsProvider = ({children}) => {
  const [ good ] = useSound(soundCorrect, {
    volume: 0.1
  })

  const [ error ] = useSound(soundError, {
    volume: 0.1
  })
  const [t] = useTranslation('global')
  
  const wrong = (text) => {  
    Swal.fire({
      text: text,
      width: '30%',
      imageUrl: gifError,
      imageWidth: '25%',
      imageHeight: '60%',
      imageAlt: 'A tall image',
    })
    error()
  }

  const correct = (text) => {  
    Swal.fire({
      text: text,
      width: '30%',
      imageUrl: gifCorrect,
      imageWidth: '25%',
      imageHeight: '60%',
      imageAlt: 'A tall image',
    })
    good()
  }

  // Para utilizarlas importar "import { Alerts } from 'esto va a cambiar'" en el componente donde lo necesitemos
  // Crear constante/s segun necesitemos, si necesitamos una solo crear una constante "const { correct, wrong } = Alerts()"
  // Para ejecutarla solo llamarla correct(text)/wrong(text), no olvidar pasar un text para que cada alerta sea distinta
  // Los textos pueden ser estaticos o dinamicos(para este se necesita crear el texto asi `${text}`)
  // En header dejo ejemplos de los dos

  return(
    <AlertContext.Provider value = {{wrong, correct}}>
      {children}
    </AlertContext.Provider>
  )
}


export const Alerts = () => {
  return useContext(AlertContext)
}