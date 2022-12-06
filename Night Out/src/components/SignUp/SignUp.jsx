import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Helmet } from "react-helmet"
import { useNavigate } from 'react-router-dom'
import { useTranslation } from "react-i18next";

import { postUser, getUserDetail } from '../../redux/actions/index'

import { UserAuth } from '../firebase/context/AuthContext'
import { Alerts } from '../alerts/Alerts'

function validate(user) {
  let error = {}
  
    if(user.name && user.name.length < 8) error.name = 'El nombre debe contener al menos 8 caracteres'
    if(!/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/.test(user.name)) error.name1 = 'El nombre debe contener solo letras'

    if(user.dni){
      const dniString = user.dni.toString()
      if(dniString.length !== 8) error.dni = 'Ingrese un dni valido'
    }

    if(user.cel[0] === '+'){
      if(isNaN(user.cel.substring(1, user.cel.length - 1)))
      error.cel = 'algodelcel'
    } else if(isNaN(user.cel)){
      error.cel1 = 'algodelcel'
    }

  return error
}

function SignUp() {
  const [t] = useTranslation("global");
  const { createUserEmailPassword } = UserAuth()
  const { correct, wrong } = Alerts()

  const dispatch = useDispatch()
  const [user, setUser] = useState({
    name:"",
    pass1:"",
    pass2:"",
    dni:"",
    years:"",
    email:"",
    cel:"",
    image:""
  })

  const [error, setError] = useState("")
  const [check, setCheck] = useState(false)

  const navigate = useNavigate()

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name] : e.target.value})
    setError(validate({
      ...user,
      [e.target.name]: e.target.value,
    }))
  }

  const handleChangeCheck = (e) => { 
    if(e.target.checked === true){
      setCheck(true)
    } else {
      setCheck(false)
    }
    }
  
  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log(user)
    if(user.pass1 === user.pass2){
      if(check === true){
        if(Object.entries(error).length === 0){
          try {
            const password = user.pass1
            const email = user.email
            const userData = await createUserEmailPassword(email, password)
            if(userData !== undefined) {
              await dispatch(postUser({
                id: userData.user.uid,
                name: user.name,
                password: password,
                email: email,
                cel: user.cel,
                years: user.years,
                dni: user.dni,
                image: ""
              }))
              localStorage.setItem('id', userData.user.uid)
              localStorage.setItem('email', email)
              let text = `${t("signUp.registered")}` 
              correct(text)
              await dispatch(getUserDetail(userData.user.uid))
            }
            navigate('/feed')
          } catch(error) {
            console.log(error.code)
            if(error.code === 'auth/missing-email'){
              const text = `${t("signUp.missing-email")}` 
              wrong(text)
            }
            if(error.code === 'auth/invalid-email'){
              const text = `${t("signUp.invalid-email")}`  
              wrong(text)
            }
            if(error.code === 'auth/email-already-in-use'){
              const text = `${t("signUp.email-already-in-use")}`  
              wrong(text)
            }
            if(error.code === 'auth/internal-error'){//cuando pondo email y no contraseña
              const text = `${t("signUp.internal-error")}`  
              wrong(text)
            }
            if(error.code === 'auth/weak-password'){
              const text = `${t("signUp.weak-password")}`  
              wrong(text)
            }
          }
        } 
        else if(error.name){
          const text = `${t("signUp.nameLength")}` 
          wrong(text)
        }
        else if(error.name1){
          const text = `${t("signUp.nameLetter")}` 
          wrong(text)
        }
        else if(error.dni){
          const text = `${t("signUp.dni")}`  
          wrong(text)
        }
        else if(error.cel){
          const text = `${t("signUp.cel+")}`  
          wrong(text)
        }
        else if(error.cel1){
          const text = `${t("signUp.cel")}`  
          wrong(text)
        }
      } else {
        wrong(`${t("signUp.check")}` )
      }
    } else {
      wrong(`${t("signUp.password")}` )      
    }
  }
  return (
    <>
    <Helmet>
      <title>
      {t("signup.Night Out - Sign Up")}
      </title>
    </Helmet>
    <div className="flex flex-col items-center justify-evenly m-20 w-full">
      <h2 
        className="bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante4 rounded-3xl font-bold px-48 py-10 text-4xl text-white mb-16 md:text-3xl s:px-10 s:text-center s:mb-5 s:mt-5 s:text-2xl dark:from-Lgradiante1 dark:via-Lgradiante2 dark:to-Lgradiante4"
        onSubmit={handleSubmit}
      >
        {t("signup.Sign Up")}
      </h2>
      <div className="bg-gradient-to-r from-gradiante1 via-gradiante2 to-gradiante4 rounded-3xl flex flex-col justify-evenly items-center lg:w-3/4 md:p-10 text-center s:w-11/12 s:px-3 s:py-10 xl:w-1/2 2xl:w-1/3 dark:from-Lgradiante1 dark:via-Lgradiante2 dark:to-Lgradiante4">
        <form className="flex flex-col w-full " action="" onSubmit={(e) => handleSubmit(e)}>
          <div className="w-full flex flex-row flex-nowrap bg-gray rounded-full mb-5">
            <img
              className="h-8 m-3"
              src="src\assets\user.svg"
              alt="imagen usuario"
            />
            <input
              className="colorNegro w-full rounded-r-full outline-none text-xl bg-gray"
              name="name"
              type="text"
              placeholder="User"
              onChange={(e) => {handleChange(e)}}
              required
            />
          </div>
          <div className="w-full flex flex-row flex-nowrap bg-gray rounded-full mb-5">
            <img
              className="h-8 m-3"
              src="src\assets\sobre.svg"
              alt="imagen mail"
            />
            <input
              className="colorNegro w-full rounded-r-full outline-none text-xl bg-gray"
              type="email"
              name="email"
              //id="mail"
              placeholder="Mail"
              onChange={(e) => {handleChange(e)}}
              required
            />
          </div>
          <div className="w-full flex flex-row flex-nowrap bg-gray rounded-full mb-5">
            <img
              className="h-8 m-3"
              src="src\assets\candado.svg"
              alt="imagen contraseña"
            />
              <input
              className="colorNegro w-full rounded-r-full outline-none text-xl bg-gray"
              type="password"
              name="pass1"
              //id="pass1"
              placeholder="Password"
              onChange={(e) => {handleChange(e)}}
              required
            />
          </div>
          <div className="w-full flex flex-row flex-nowrap bg-gray rounded-full mb-5">
            <img
              className="h-8 m-3"
              src="src\assets\candado.svg"
              alt="imagen contraseña"
            />
            <input
              className="colorNegro w-full rounded-r-full outline-none text-xl bg-gray"
              type="password"
              name="pass2"
              //id="pass2"
              placeholder="Confirm Password"
              onChange={(e) => {handleChange(e)}}
              required
            />
          </div>
          <div className="w-full flex flex-row flex-nowrap bg-gray rounded-full mb-5">
            <img
              className="h-8 m-3"
              src="src\assets\dni.svg"
              alt="imagen dni"
            />
            <input
              className="colorNegro w-full rounded-r-full outline-none text-xl bg-gray pr-4"
              type="number"
              name="dni"
              //id="dni"
              placeholder="XX.XXX.XXX"
              onChange={(e) => {handleChange(e)}}
              required
            />
          </div>
          <div className="w-full flex flex-row flex-nowrap bg-gray rounded-full mb-5">
            <img
              className="h-8 m-3"
              src="src\assets\telefono.svg"
              alt="imagen telefono"
            />
            <input
              className="colorNegro w-full rounded-r-full outline-none text-xl bg-gray"
              type="tel"
              name="cel"
              //id="telefono"
              placeholder="11 XXXX XXXX"
              maxLength='13'
              minLength='10'
              onChange={(e) => {handleChange(e)}}
              required
            />
          </div>
          <div className="w-full flex flex-row flex-nowrap bg-gray rounded-full mb-5">
            <img
              className="h-8 m-3"
              src="src\assets\calendario.svg"
              alt="imagen calendario"
            />
            <input
              className="colorNegro w-full rounded-r-full outline-none text-xl bg-gray pr-4"
              type="date"
              name="years"
              id="cumple"
              onChange={(e) => {handleChange(e)}}
              required
            />
          </div>
          <div className="text-white text-xl flex md:flex-row items-center justify-center s:flex-col s:mb-5">
          <input 
            type="checkbox" 
            name="check" 
            id="tyc"
            value={check}
            onChange={(e) => {handleChangeCheck(e)}}  
            className="s:order-2 md:order-1"
          />
            <label className="m-5 text-center s:order-1 md:order-2" htmlFor="tyc">
            {t("signup.Agree to Terms and Conditions")}
            </label>
          </div>
          <button
            className="bg-gray rounded-full colorNegro h-8 text-xl mx-auto p-7 text-center flex justify-center items-center font-bold hover:bg-white s:text-lg"
            type='submit'
          >
            {t("signup.Sign up!")}
          </button>
        </form>
      </div>
      </div>
      </>
  );
}

export default SignUp;
