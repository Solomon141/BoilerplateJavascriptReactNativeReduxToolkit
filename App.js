import React from "react";
import StackNav from "./src/Navigations/StackNav";
import store from "./src/Redux/store";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import persistStore from "redux-persist/es/persistStore";
let persistor = persistStore(store);

import global_en from "./src/Translations/en/global.json";
import global_es from "./src/Translations/es/global.json";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: "en",
  compatibilityJSON: "v3",
  resources: {
    en: {
      global: global_en,
    },
    es: {
      global: global_es,
    },
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StackNav />
      </PersistGate>
    </Provider>
  );
}
