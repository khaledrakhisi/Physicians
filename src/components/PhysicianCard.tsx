import React from "react";

import { images } from "../constants/images";
import { IPhysician } from "../interfaces/Physician";

import classes from "./PhysicianCard.module.scss";

interface IPhysicianCardProps {
  physician: IPhysician;
}

export const PhysicianCard: React.FunctionComponent<IPhysicianCardProps> = ({
  physician,
}) => {
  return (
    <li className={classes.physician_card}>
      <div className={classes.physician_card__header}>
        <h1>{`${physician.specialty}`}</h1>
        {/* <h1>{"طبیب الداخلی"}</h1> */}
      </div>

      <div className={classes.physician_card__info}>
        <img
          className={classes.physician_card__info__avatar}
          src={
            physician.name.includes("آقا")
              ? images.doctorMale
              : images.doctorFemale
          }
          alt="Doctor face"
        />
        <h3>{physician.name}</h3>

        <section className={classes.physician_card__info__subinfo}>
          <div className={classes.physician_card__info__subinfo__hour}>
            <h3>{"زمان حضور"}</h3>
            <h2>{physician.startTime}</h2>
          </div>

          <div className={classes.physician_card__info__subinfo__remaining}>
            <h3>{"نوبت های مانده"}</h3>
            <h2>{physician.remainingAppointments}</h2>
          </div>
        </section>
      </div>
    </li>
  );
};
