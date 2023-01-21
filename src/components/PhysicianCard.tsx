import React from "react";

import { Images } from "../constants/images";
import { IPhysician } from "../interfaces/Physician";
import {
  convertTo24HoursFormat,
  getStartEndTime,
  getTodayDate,
} from "../utils/utils";

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
        !physician.remain ? classes.disabled : null
      }`}
    >
      <div
        className={`${classes.physician_card__header} ${
          !physician.remain ? classes.disabled : null
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
        {physician.doctorName.startsWith("آقا") ? (
          <Images.DoctorMale
            className={`${classes.physician_card__info__avatar} ${
              !physician.remain ? classes.disabled : null
            }`}
          />
        ) : (
          <Images.DoctorFemale
            className={`${classes.physician_card__info__avatar} ${
              !physician.remain ? classes.disabled : null
            }`}
          />
        )}
        <div className={`${classes.physician_card__info__name}`}>
          <h3 className={`${!physician.remain ? classes.disabled : null}`}>
            {physician.doctorName}
          </h3>
        </div>

        <section className={classes.physician_card__info__subinfo}>
          <div className={classes.physician_card__info__subinfo__hour}>
            <h3>{"ساعت حضور"}</h3>
            <h2 className={`${!physician.remain ? classes.disabled : null}`}>
              {convertTo24HoursFormat(
                new Date(
                  `${getTodayDate()} ${
                    getStartEndTime(physician.doctorVisitTime)[0]
                  }`
                )
              )}
            </h2>
          </div>

          <div className={classes.physician_card__info__subinfo__remaining}>
            <h3>{"نوبت های مانده"}</h3>
            <h2 className={`${!physician.remain ? classes.disabled : null}`}>
              {physician.remain.toLocaleString("fa-IR")}
            </h2>
          </div>
        </section>
      </div>
    </li>
  );
};
