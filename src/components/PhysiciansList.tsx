import React from "react";

import { IPhysician } from "../interfaces/Physician";

import classes from "./PhysicianList.module.scss";

interface IPhysicianListProps {
  physicians: Array<IPhysician>;
}

export const PhysiciansList: React.FunctionComponent<IPhysicianListProps> = ({
  physicians,
}) => {
  return <ul className={classes.physician_list}>List</ul>;
};
