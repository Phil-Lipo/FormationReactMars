import React from "react";
import { ColorConsumer } from "./ColorContext";

type IProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<IProps> = ({ children, style, ...otherProps }) => (
  <ColorConsumer>
    {color => (
      <button style={{ color, ...style }} {...otherProps}>
        {children}
      </button>
    )}
  </ColorConsumer>
);

export default React.memo(Button);
