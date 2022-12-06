import { React, useContext, useState } from "react";
import { GlobalContext } from "../../Context/GlobalContext";


function DarkMode() {

    const { DarkMode, setDarkMode } = useContext(GlobalContext)
    const changeDarkMode = (mode) => {
        
        if ( mode.target.value === "light" ) {
            document.documentElement.classList.add("dark");
            setDarkMode("light")
            console.log("Modo Claro " + DarkMode)
        }
        else {
            document.documentElement.classList.remove("dark");
            setDarkMode("dark")
            console.log("Modo Oscuro " + DarkMode)
        }

    };

  return (
    <div className="w-full flex flex-row items-center">
      <p className="mr-3">
        Dark/Light mode:
      </p>
      <select
        name="darkMode"
        id="darkMode"
        defaultValue={DarkMode}
        onChange={changeDarkMode}
        className="text-black bg-gray p-2 pr-4 pl-4 outline-none border-none rounded-full appearance-none hover:cursor-pointer text-center"
      >
        <option value="dark">
          Dark
        </option>
        <option value="light">Light</option>
      </select>
    </div>
  );
}

export default DarkMode;
