import React from "react";
import { useContext } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalContext";
import { useTranslation } from "react-i18next";
import { Alerts } from "../alerts/Alerts";
import { UserAuth } from "../firebase/context/AuthContext";
import { useSelector } from "react-redux";

function Navbar() {
  let { setNavbarMostrado, NavbarMostrado } = useContext(GlobalContext);
  const [t] = useTranslation("global");

  const navigate = useNavigate();
  const { logOut, user } = UserAuth();
  const { correct, wrong } = Alerts();
  const userData = useSelector((state) => state.userDetail);

  const logOutSesion = async () => {
    try {
      await logOut();
      const text = `${t("signIn.close")}`
      await correct(text);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const Navegar = () => {
    setNavbarMostrado(false)
    navigate("/")
  }

  return (
    <div
      className={
        NavbarMostrado === false
          ? "bg-gradiante1 fixed text-white flex flex-col justify-between NavbarOculto z-50 dark:bg-Lgradiante1"
          : "bg-gradiante1 fixed text-white flex flex-col justify-between Navbar z-50 dark:bg-Lgradiante1"
      }
    >
      <div>
        <div className="self-center flex flex-col items-center justify-evenly mt-4">
          {user ? (
            <Link to="/User">
              <img
                src="src\assets\candado.svg"
                alt="foto perfil"
                className="w-20 rounded-full"
              />
            </Link>
          ) : (
            <img
              src="src\assets\candado.svg"
              alt="foto perfil"
              className="w-20 rounded-full"
            />
          )}
          <p className="text-xl">@Nombre</p>
          <div className="flex flex-row mb-4">
            <p className="text-sm text-gray">
              <span className="text-white">55M</span> {t("navbar.Followers")}
              <span className="ml-5 text-white">30</span>{" "}
              {t("navbar.Following")}
            </p>
          </div>
        </div>
        <div>
          <span className="bg-black h-0.2 w-full block dark:h-0.2 dark:bg-lineaNavbar"></span>
          <ul>
            <li>
              {user ? (
                <>
                  <Link to="/User">
                    <h2 className="pr-10 pl-10 text-3xl mt-2 mb-2 s:text-xl">
                      {t("navbar.User")}
                    </h2>
                  </Link>
                  <span className="bg-black h-0.2 w-full block dark:h-0.2 dark:bg-lineaNavbar"></span>
                </>
              ) : (
                ""
              )}
            </li>
            <li>
              <h2 className="pr-10 pl-10 text-3xl mt-2 mb-2 s:text-xl">
                {t("navbar.Direct Messages")}
              </h2>
              <span className="bg-black h-0.2 w-full block dark:h-0.2 dark:bg-lineaNavbar"></span>
            </li>
            <li>
              {user ? (
                <Link to="/Settings-User">
                  <h2 className="pr-10 pl-10 text-3xl mt-2 mb-2 s:text-xl">
                    {t("navbar.Settings")}
                  </h2>
                </Link>
              ) : (
                <Link to="/Settings-Configuration">
                  <h2 className="pr-10 pl-10 text-3xl mt-2 mb-2 s:text-xl">
                    {t("navbar.Settings")}
                  </h2>
                </Link>
              )}
              <span className="bg-black h-0.2 w-full block dark:h-0.2 dark:bg-lineaNavbar"></span>
            </li>
            <li>
              {user ? (
                <span>
                  {userData[0] !== undefined
                    ? `Welcome ${userData[0].name}`
                    : ""}
                  <button onClick={logOutSesion}>
                    <h2 className="pr-10 pl-10 text-3xl mt-2 mb-2 s:text-xl">
                      {t("navbar.Log Out")}
                    </h2>
                  </button>
                  <span className="bg-black h-0.2 w-full block dark:h-0.2 dark:bg-lineaNavbar"></span>
                </span>
              ) : (
                <>
                  <button onClick={Navegar} >
                    <h2 className="pr-10 pl-10 text-3xl mt-2 mb-2 s:text-xl">
                      {t("header.signin")}
                    </h2>
                  </button>
                  <span className="bg-black h-0.2 w-full block dark:h-0.2 dark:bg-lineaNavbar"></span>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div>
        <span className="bg-white h-0.1 w-4/5 block mx-auto"></span>
        <div className="flex flex-col items-center justify-center mt-8 mb-8">
          <div className="flex flex-row items-center justify-center">
            <img className="w-14 mr-3" src="src\assets\logo.png" alt="logo" />
            <h2 className="font-semibold text-2xl">Night Out</h2>
          </div>
          <h3 className="text-gray font-semibold text-md">
            © All Rights Reserved
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
