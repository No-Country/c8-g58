import { createContext, useState } from "react";

export const GlobalContext = createContext();

export function GlobalContextProvider(props) {
  const [NavbarMostrado, setNavbarMostrado] = useState(false);
  const [FiltrosMostrado, setFiltrosMostrado] = useState(false);
  const [FiltroEvento, setFiltroEvento] = useState("Evento");
  const [FiltroLugar, setFiltroLugar] = useState("Lugar");
  const [cambioFiltros, setCambioFiltros] = useState(false);
  const [BusquedaMostrado, setBusquedaMostrado] = useState(false);
  const [DarkMode, setDarkMode] = useState("dark");
  return (
    <GlobalContext.Provider
      value={{
        NavbarMostrado,
        setNavbarMostrado,
        FiltrosMostrado,
        setFiltrosMostrado,
        FiltroEvento,
        setFiltroEvento,
        FiltroLugar,
        setFiltroLugar,
        cambioFiltros,
        setCambioFiltros,
        BusquedaMostrado,
        setBusquedaMostrado,
        DarkMode,
        setDarkMode,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
