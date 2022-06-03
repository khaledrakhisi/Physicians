import React from "react";

import { IPhysician } from "../interfaces/Physician";

import { PhysicianCard } from "./PhysicianCard";

import classes from "./PhysiciansList.module.scss";

interface IPhysicianListProps {
  physicians: Array<IPhysician>;
}

export const PhysiciansList: React.FunctionComponent<IPhysicianListProps> = ({
  physicians,
}) => {
  return (
    <ul className={classes.physician_list}>
      {physicians.map((phy) => (
        <PhysicianCard physician={phy} key={phy.id} />
      ))}
    </ul>
  );
};
