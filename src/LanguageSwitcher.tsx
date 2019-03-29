import React from "react";
import Button from "./Button";
import { useI18n } from "./i18n";

const langs = {
  fr: "Français",
  en: "English"
};

const LanguageSwitcher: React.FC = () => {
  const { lang, setLang } = useI18n();
  return (
    <p>
      {Object.keys(langs).map(langKey => (
        <Button
          key={langKey}
          style={{ borderStyle: lang === langKey ? "inset" : "outset" }}
          onClick={() => setLang(langKey)}
        >
          {langs[langKey]}
        </Button>
      ))}
    </p>
  );
};

export default LanguageSwitcher;
