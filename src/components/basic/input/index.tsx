import React from "react";
import classNames from "classnames";

import styles from "./style.module.scss";

type TextInputProps = {
  type?: "text" | "email" | " number";
  className?: string;
  placeHolder?: string;
  hasAction?: boolean;
  dir?: "rtl" | "ltr";
};

const TextInput: React.FC<TextInputProps> = ({
  className = "",
  type = "text",
  placeHolder = "",
  hasAction,
  dir = "ltr",
}) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <input type={type} placeholder={placeHolder} />
      {hasAction && (
        <div role="button" className={classNames(styles.action, { [styles.rightMode]: dir === "rtl" })}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8.9374 0.316032L15.7175 7.26868C15.8202 7.37402 15.8932 7.48814 15.9363 7.61104C15.9788 7.73394 16 7.86562 16 8.00608C16 8.14654 15.9788 8.27821 15.9363 8.40111C15.8932 8.52402 15.8202 8.63814 15.7175 8.74348L8.9374 15.6961C8.74906 15.8893 8.51381 15.9904 8.23165 15.9995C7.94881 16.0079 7.70465 15.9068 7.4992 15.6961C7.29374 15.503 7.18656 15.2618 7.17766 14.9724C7.16944 14.6824 7.26806 14.432 7.47351 14.2213L12.5072 9.05951L1.02729 9.05951C0.736222 9.05951 0.492071 8.95873 0.294831 8.75717C0.0982768 8.55491 -1.23459e-06 8.30455 -1.2085e-06 8.00608C-1.1824e-06 7.7076 0.0982769 7.45759 0.294831 7.25603C0.492071 7.05378 0.736222 6.95265 1.02729 6.95265L12.5072 6.95265L7.47352 1.79083C7.28518 1.59771 7.18656 1.3519 7.17766 1.05343C7.16944 0.75496 7.26806 0.50916 7.47352 0.316032C7.66185 0.105345 7.90155 1.19936e-06 8.19262 1.22481e-06C8.48368 1.25025e-06 8.73194 0.105345 8.9374 0.316032Z"
              fill="white"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default TextInput;
