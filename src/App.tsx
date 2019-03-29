import React from "react";
import Button from "./Button4";
import Counter from "./Counter";
import ListHook from "./ListHook";
import Students from "./Students";
import LanguageSwitcher from "./LanguageSwitcher";
import NewsletterForm from "./forms/NewsletterForm";
import SignupForm from "./forms/SignupForm";
import { Pokemon } from "./Pokemon";
import { ColorProvider } from "./ColorContext";
import { I18nProvider, Translate } from "./i18n";

const messages = {
  en: require("./locales/en"),
  fr: require("./locales/fr")
};

const students = [
  { id: "Bob", note: 4 },
  { id: "Jean-Michel", note: 7 },
  { id: "Alice", note: 8 }
];

const handleFormSubmit = async (values: any) => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  alert(JSON.stringify(values));
};

export default function App() {
  return (
    <I18nProvider defaultLang="fr" messages={messages}>
      <ColorProvider value="red">
        <div className="App">
          <LanguageSwitcher />
          <Button onClick={() => console.log("click")}>
            <Translate id="button" />
          </Button>
          <hr />

          <Students students={students} />
          <hr />

          <Counter />
          <hr />

          <NewsletterForm onSubmit={handleFormSubmit} />
          <hr />
          <SignupForm onSubmit={handleFormSubmit} />
          <hr />

          <Pokemon id={25} />

          <hr />
          <ListHook />
        </div>
      </ColorProvider>
    </I18nProvider>
  );
}
