import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"

import { getUserDetail } from "../../redux/actions";

import { UserAuth } from '../firebase/context/AuthContext'
import { Alerts } from '../alerts/Alerts'

import { useTranslation } from 'react-i18next';

import sobre from '../../assets/imagenes/sobre.svg'
import candado from '../../assets/imagenes/candado.svg'

function validate(user) {
  let error = {}
  
    if(!user.email) error.email = 'Ingrese un email'

    if(!user.password) error.password = 'Ingrese una contraseña'

  return error
}

function LogIn() {
  const { signInEmailPassword } = UserAuth()
  const { correct, wrong } = Alerts()

  const [t] = useTranslation('global')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [user, setUser] = useState({
    email:"",
    password:""
  })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name] : e.target.value})
    setError(validate({
      ...user,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(Object.entries(error).length === 0){
    try {
      const email = user.email
      const password = user.password
      const userSignIn = await signInEmailPassword(email, password)
      await correct('Sesion Iniciada')
      await dispatch(getUserDetail(userSignIn.user.uid))
      localStorage.setItem('id', userSignIn.user.uid)
      localStorage.setItem('email', email)
      navigate('/Feed')
    } catch (error) {
      if(error.code === 'auth/wrong-password'){
        const text = error.code
        wrong(text)
      }
      if(error.code === 'auth/user-not-found'){
        const text = error.code
        wrong(text)
      }
    }
  } 
  else if(error.email){
    const text = `${error.email}`
    wrong(text)
  }
  else if(error.password){
    const text = `${error.password}`
    wrong(text)
  }
}

  useEffect(() => {

  }, [])
  return (
    <div
      className="flex flex-col justify-evenly items-center colorBlanco w-full mb-8 mt-16 "
      id="logear"
    >
      <h2 className="bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante4 rounded-3xl font-bold px-48 py-10 text-4xl m-10">
        {" "}
        {t("login.Sign In")}
      </h2>
      <div className="bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante3 rounded-3xl p-10 flex flex-col justify-evenly items-center w-1/2 mb-10">
        <form className="flex flex-col w-full " onSubmit={handleSubmit} action="">
          <label className="text-xl font-bold m-2 ml-5" htmlFor="username">
          {t("login.Email")}
          </label>
          <div className="w-full flex flex-row flex-nowrap bg-gray rounded-full mb-5">
            <img
              className="h-8 m-3"
              src={sobre}
              alt="imagen usuario"
            />
            <input
              className="colorNegro w-full rounded-r-full outline-none text-xl bg-gray"
              type="email"
              placeholder=""
              id="email"
              name="email" 
              onChange={(e) => handleChange(e)}
            />
          </div>
          <label className="text-xl font-bold m-2 ml-5" htmlFor="password">
          {t("login.Password")}
          </label>
          <div className="w-full flex flex-row flex-nowrap bg-gray rounded-full  mb-5">
            <img
              className="h-8 m-3"
              src={candado}
              alt="imagen contraseña"
            />
            <input
              className="colorNegro w-full rounded-r-full outline-none text-xl bg-gray"
              type="password"
              placeholder=""
              id="password"
              name="password" 
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button
            className="bg-gray rounded-full colorNegro h-8 text-xl mx-auto p-7 text-center flex justify-center items-center font-bold"
          >
            {t("login.Sign In")}
          </button>
        </form>
      </div>
      <div className="bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante4 rounded-3xl flex flex-col justify-evenly items-center w-1/2 p-10 text-center">
        <h2 className="font-bold text-4xl mb-10">Don't have an account yet?</h2>
        <h2 className="font-bold text-4xl mb-10">Sign up!</h2>
        <button className="bg-gray rounded-full colorNegro h-8 text-xl mx-auto p-7 text-center flex justify-center items-center font-bold">
          <Link to="/Sign-up">{t("login.Let's go!")}</Link>
        </button>
      </div>
    </div>
  );
}

export default LogIn;
