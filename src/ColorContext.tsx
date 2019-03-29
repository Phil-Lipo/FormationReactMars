import React from "react";

const ColorContext = React.createContext("blue");

export default ColorContext;
export const ColorProvider = ColorContext.Provider;
export const ColorConsumer = ColorContext.Consumer;

/*** HOC pour injecter la color du context dans un composant ***/

interface IColorProps {
  color: string;
}

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
type Diff<T, K> = Omit<T, keyof K>;

/*
// Avec un composant en class
export function injectColor<Props extends IColorProps>(
  Component: React.ComponentType<Props>
) {
  return class ColorWrapper extends React.PureComponent<
    Diff<Props, IColorProps>
  > {
    public render() {
      return (
        <Consumer>
          {color => <Component color={color} {...this.props as Props} />}
        </Consumer>
      );
    }
  };
}
*/

// Avec un composant fonctionnel
export function injectColor<Props extends IColorProps>(
  Component: React.ComponentType<Props>
): React.FC<Diff<Props, IColorProps>> {
  return props => (
    <ColorConsumer>
      {color => <Component color={color} {...props as Props} />}
    </ColorConsumer>
  );
}
