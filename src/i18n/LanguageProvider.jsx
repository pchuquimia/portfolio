import { useEffect, useMemo, useState } from "react";
import { LanguageContext } from "./LanguageContext";
import { translations } from "./translations";

const languageStorageKey = "portfolio-language";

const getInitialLanguage = () => {
  try {
    const savedLanguage = window.localStorage.getItem(languageStorageKey);
    if (savedLanguage === "es" || savedLanguage === "en") return savedLanguage;
  } catch {
    // The browser may block storage; language detection still works without it.
  }

  return window.navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(getInitialLanguage);
  const content = translations[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = content.meta.title;

    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute("content", content.meta.description);

    try {
      window.localStorage.setItem(languageStorageKey, language);
    } catch {
      // A blocked storage API should not prevent switching languages.
    }
  }, [content.meta.description, content.meta.title, language]);

  const value = useMemo(
    () => ({ language, setLanguage, content }),
    [content, language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export default LanguageProvider;
