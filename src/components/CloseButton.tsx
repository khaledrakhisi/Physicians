import React from "react";

import { ReactComponent as CloseIcon } from "../assets/images/close-red.svg";

import classes from "./CloseButton.module.scss";

interface ICloseButtonProps {
  onClickHandle: (e: React.MouseEvent) => void;
}

export const CloseButton: React.FunctionComponent<ICloseButtonProps> = ({
  onClickHandle,
}) => {
  return (
    <button
      id="closeButton"
      className={classes.closeButton}
      onClick={(e) => onClickHandle(e)}
    >
      <CloseIcon className={classes.deleteIcon} width={16} />
    </button>
  );
};
