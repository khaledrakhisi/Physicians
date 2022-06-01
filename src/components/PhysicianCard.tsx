import React from "react";

import { IPhysician } from "../interfaces/Physician";

import classes from "./PhysicianCard.module.scss";

interface IPhysicianListProps {
  physician: IPhysician;
}

export const PhysiciansList: React.FunctionComponent<IPhysicianListProps> = ({
  physician,
}) => {
  return <li className={classes.physician_card}>List</li>;
};
