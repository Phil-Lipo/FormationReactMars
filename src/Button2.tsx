import React, { useContext } from "react";
import ColorContext from "./ColorContext";

type IProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<IProps> = ({ children, style, ...otherProps }) => {
  const color = useContext(ColorContext);
  return (
    <button style={{ color, ...style }} {...otherProps}>
      {children}
    </button>
  );
};

export default React.memo(Button);
