import React from "react";
import { injectColor } from "./ColorContext";

type IProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color: string;
};

const Button: React.FC<IProps> = ({
  children,
  color,
  style,
  ...otherProps
}) => (
  <button style={{ color, ...style }} {...otherProps}>
    {children}
  </button>
);

export default injectColor(Button);
