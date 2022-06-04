import React, { useRef, useState } from "react";

import { useTimer } from "../hooks/useTimer";
import { IPhysician } from "../interfaces/Physician";

import { PhysicianCard } from "./PhysicianCard";

import classes from "./PhysiciansList.module.scss";

const SCROLL_VALUE = 150;

interface IPhysicianListProps {
  physicians: Array<IPhysician>;
  scrollInterval: number;
}

export const PhysiciansList: React.FunctionComponent<IPhysicianListProps> = ({
  physicians,
  scrollInterval,
}) => {
  const bottomRef = useRef<HTMLUListElement | null>(null);
  const [scrollDirection, setScrollDirection] = useState<number>(1);

  useTimer(() => {
    if (physicians.length < 4) {
      return;
    }

    if (bottomRef.current) {
      bottomRef.current.scrollBy({
        top: SCROLL_VALUE * scrollDirection,
        behavior: "smooth",
      });

      setScrollDirection((prev) => {
        // console.log(
        //   bottomRef.current!.offsetHeight + bottomRef.current!.scrollTop,
        //   bottomRef.current!.scrollHeight
        // );

        if (
          bottomRef.current!.offsetHeight + bottomRef.current!.scrollTop >=
          bottomRef.current!.scrollHeight
        ) {
          return -1;
        }
        if (bottomRef.current!.scrollTop <= 0) {
          return 1;
        }
        return prev;
      });
    }
  }, scrollInterval);

  return (
    <ul className={classes.physician_list} ref={bottomRef}>
      {physicians.length ? (
        physicians.map((phy) => <PhysicianCard physician={phy} key={phy.id} />)
      ) : (
        <h1>{"در این شیفت پزشکی حضور ندارد"}</h1>
      )}
    </ul>
  );
};
