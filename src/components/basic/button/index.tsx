import React, { ReactNode } from "react";
import classNames from "classnames";

import styles from "./style.module.scss";

type ButtonProps = {
  children: ReactNode;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, className = "" }) => {
  return <button className={classNames(styles.wrapper, className)}>{children}</button>;
};

export default Button;
