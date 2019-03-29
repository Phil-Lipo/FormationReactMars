export interface ITranslationsMap {
  [id: string]: string;
}

export interface I18nProviderProps {
  defaultLang: string;
  messages: {
    [lang: string]: ITranslationsMap;
  };
}

export type ITranslate = (id: string) => string;

export interface IContextValue {
  lang: string;
  translate: ITranslate;
  setLang: (lang: string) => void;
}

export interface ITranslateProps {
  id: string;
}

export interface IInjectedTranslateProps {
  translate: ITranslate;
}

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
export type Diff<T, K> = Omit<T, keyof K>;
