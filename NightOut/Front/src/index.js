import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ScrollToTop from "./components/ScrollToTop";
import { GlobalContextProvider } from "./Context/GlobalContext";

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const idioma = localStorage.getItem("language");

i18next.init({
  interpolation: { escapeValue: false },
  lng: idioma,
  fallbackLng: "en",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <ScrollToTop />
        <GlobalContextProvider>
          <App />
        </GlobalContextProvider>
      </I18nextProvider>
    </BrowserRouter>
  </Provider>
);

const firebaseConfig = {
  apiKey: "AIzaSyACzKIvC86dsrrSYA8L7TKA6l9DvgTSoWM",
  authDomain: "night-out-41f0e.firebaseapp.com",
  projectId: "night-out-41f0e",
  storageBucket: "night-out-41f0e.appspot.com",
  messagingSenderId: "934692580200",
  appId: "1:934692580200:web:621f10d86ab8500c1904dd"
};
