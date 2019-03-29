import React from "react";
import ColorContext from "./ColorContext";

type IProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

class Button extends React.PureComponent<IProps> {
  public static contextType = ColorContext;

  public render() {
    const { children, style, ...otherProps } = this.props;
    const color: string = this.context;
    return (
      <button style={{ color, ...style }} {...otherProps}>
        {children}
      </button>
    );
  }
}

export default Button;
