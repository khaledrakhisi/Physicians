import React from "react";

import { Images } from "../constants/images";
import { IPhysician } from "../interfaces/Physician";

import classes from "./PhysicianCard.module.scss";

interface IPhysicianCardProps {
  physician: IPhysician;
}

export const PhysicianCard: React.FunctionComponent<IPhysicianCardProps> = ({
  physician,
}) => {
  return (
    <li
      className={`${classes.physician_card} ${
        !physician.remainingAppointments ? classes.disabled : null
      }`}
    >
      <div
        className={`${classes.physician_card__header} ${
          !physician.remainingAppointments ? classes.disabled : null
        }`}
      >
        <h1>{`${physician.specialty}`}</h1>
        {/* <h1>{"طبیب الداخلی"}</h1> */}
      </div>

      <div className={classes.physician_card__info}>
        {/* <img
          className={classes.physician_card__info__avatar}
          src={
            physician.name.startsWith("آقا")
              ? images.doctorMale
              : images.doctorFemale
          }
          alt="Doctor face"
        /> */}
        {physician.name.startsWith("آقا") ? (
          <Images.DoctorMale
            className={`${classes.physician_card__info__avatar} ${
              !physician.remainingAppointments ? classes.disabled : null
            }`}
          />
        ) : (
          <Images.DoctorFemale
            className={`${classes.physician_card__info__avatar} ${
              !physician.remainingAppointments ? classes.disabled : null
            }`}
          />
        )}
        <h3
          className={`${
            !physician.remainingAppointments ? classes.disabled : null
          }`}
        >
          {physician.name}
        </h3>

        <section className={classes.physician_card__info__subinfo}>
          <div className={classes.physician_card__info__subinfo__hour}>
            <h3>{"ساعت حضور"}</h3>
            <h2
              className={`${
                !physician.remainingAppointments ? classes.disabled : null
              }`}
            >
              {physician.startTime}
            </h2>
          </div>

          <div className={classes.physician_card__info__subinfo__remaining}>
            <h3>{"نوبت های مانده"}</h3>
            <h2
              className={`${
                !physician.remainingAppointments ? classes.disabled : null
              }`}
            >
              {physician.remainingAppointments.toLocaleString("fa-IR")}
            </h2>
          </div>
        </section>
      </div>
    </li>
  );
};
