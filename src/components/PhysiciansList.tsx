import React, { useRef, useState } from "react";

import { config } from "../config/config";
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
  const listRef = useRef<HTMLUListElement | null>(null);
  const [scrollDirection, setScrollDirection] = useState<number>(1);

  useTimer(() => {
    if (listRef.current) {
      // if list is not scrollable
      if (listRef.current.scrollHeight <= listRef.current.clientHeight) {
        return;
      }

      listRef.current.scrollBy({
        top: config.scrollStepValue * scrollDirection,
        behavior: "smooth",
      });

      setScrollDirection((prev) => {
        if (
          listRef.current!.offsetHeight + listRef.current!.scrollTop >=
          listRef.current!.scrollHeight
        ) {
          return -1;
        }
        if (listRef.current!.scrollTop <= 0) {
          return 1;
        }
        return prev;
      });
    }
  }, scrollInterval);

  return (
    <ul className={classes.physician_list} ref={listRef}>
      {physicians.length ? (
        physicians.map((phy) => (
          <PhysicianCard physician={phy} key={phy.doctorName} />
        ))
      ) : (
        <h1>{"در این شیفت پزشکی حضور ندارد"}</h1>
      )}
    </ul>
  );
};
