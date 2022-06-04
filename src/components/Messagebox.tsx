import React, { useContext } from "react";
import { CSSTransition } from "react-transition-group";

import UIContext from "../store/UIContext";

import { Button } from "./Button";
import { CloseButton } from "./CloseButton";

import classes from "./Messagebox.module.scss";

interface IMessageBoxProps {
  title: string;
  message: string;
  hasOkButton: boolean;
}

export const Messagebox: React.FunctionComponent<IMessageBoxProps> = ({
  title,
  message,
  hasOkButton,
}) => {
  const uiContext = useContext(UIContext);
  const nodeRef = React.useRef(null);

  return (
    <CSSTransition
      in={uiContext.isMessageboxVisible}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
      nodeRef={nodeRef}
    >
      <section className={classes.container} ref={nodeRef}>
        <div className={classes.titlebar}>
          <CloseButton
            onClickHandle={() => {
              uiContext.setMessageboxVisiblity(false);
            }}
          />
          <h1>{title}</h1>
        </div>
        <div className={classes.message}>{message}</div>
        <div className={classes.buttons}>
          {hasOkButton && (
            <Button
              onClick={() => {
                uiContext.setMessageboxVisiblity(false);
              }}
            >
              Okay
            </Button>
          )}
        </div>
      </section>
    </CSSTransition>
  );
};
