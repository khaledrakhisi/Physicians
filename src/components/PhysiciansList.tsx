import React, { useEffect, useRef, useState } from "react";

import { useTimer } from "../hooks/useTimer";
import { IPhysician } from "../interfaces/Physician";

import { PhysicianCard } from "./PhysicianCard";

import classes from "./PhysiciansList.module.scss";

interface IPhysicianListProps {
  physicians: Array<IPhysician>;
  scrollInterval: number;
}

export const PhysiciansList: React.FunctionComponent<IPhysicianListProps> = ({
  physicians,
  scrollInterval,
}) => {
  const bottomRef = useRef<HTMLUListElement | null>(null);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    if (bottomRef.current)
      bottomRef.current.scroll({
        top: scrollPosition,
        behavior: "smooth",
      });
  }, [scrollPosition]);

  useTimer(() => {
    if (bottomRef.current) {
      setScrollPosition((prev) => (prev ? 0 : bottomRef.current!.scrollHeight));
    }
  }, scrollInterval);

  return (
    <ul className={classes.physician_list} ref={bottomRef}>
      {physicians.map((phy) => (
        <PhysicianCard physician={phy} key={phy.id} />
      ))}
    </ul>
  );
};
