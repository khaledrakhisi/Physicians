import React, { useRef } from "react";

import { IPhysician } from "../interfaces/Physician";

import { PhysicianCard } from "./PhysicianCard";

import classes from "./PhysiciansList.module.scss";

interface IPhysicianListProps {
  physicians: Array<IPhysician>;
}

export const PhysiciansList: React.FunctionComponent<IPhysicianListProps> = ({
  physicians,
}) => {
  const bottomRef = useRef<HTMLUListElement | null>(null);

  const scrollToBottom = () => {
    if (bottomRef.current)
      bottomRef.current.scroll({
        top: bottomRef.current.scrollHeight,
        behavior: "smooth",
      });
  };

  return (
    <ul className={classes.physician_list} ref={bottomRef}>
      <button type="button" onClick={scrollToBottom}>
        Scroll To Bottom
      </button>
      {physicians.map((phy) => (
        <PhysicianCard physician={phy} key={phy.id} />
      ))}
    </ul>
  );
};
