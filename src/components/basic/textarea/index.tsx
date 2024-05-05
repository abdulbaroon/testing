import React from "react";

import styles from "./style.module.scss";
import classNames from "classnames";

type TextAreaProps = {
  name: string;
  rows?: number;
  placeholder?: string;
  className?: string;
};

const TextArea: React.FC<TextAreaProps> = ({ name, rows = 3, placeholder, className }) => {
  return (
    <textarea
      name={name}
      rows={rows}
      className={classNames(className, styles.wrapper)}
      placeholder={placeholder}
    ></textarea>
  );
};

export default TextArea;
