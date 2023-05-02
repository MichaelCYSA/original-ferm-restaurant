import { createContext, useContext, useEffect, useState } from "react";

import ro from "./ro.json";
import ru from "./ru.json";

const noop = (l: string) => {};

const langs: { [field: string]: { [field: string]: string } } = {
  ro,
  ru,
};

type ChangeLangFn = (l: string) => void;

type LanguageContext = {
  lang: "ru" | "ro";
  handleSelectLanguage: ChangeLangFn;
};
const LanguageContext = createContext({ lang: "", handleSelectLanguage: noop });

export const useLangContext = () => useContext(LanguageContext);

export const LanguageContextWrapper = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [lang, setLang] = useState<string>("ro");

  const handleSelectLanguage: ChangeLangFn = (l) => {
    if (!l) return;
    setLang(l);
    localStorage.setItem("lang", l);
  };

  useEffect(() => {
    const langStorage = localStorage.getItem("lang");
    if (langStorage) {
      setLang(langStorage);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, handleSelectLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const Translated = (key: string) => {
  const { lang } = useLangContext();
  const selectedLang = langs[lang];

  if (!selectedLang) {
    return key;
  }

  const translate = selectedLang[key];

  return translate || key;
};

export const useTranslated = () => {
  const { lang } = useLangContext();
  const translate = (key: string) => {
    const selectedLang = langs[lang];

    if (!selectedLang) {
      return key;
    }

    const translate = selectedLang[key];

    return translate || key;
  };
  return translate;
};
