import React, { useContext, useEffect } from "react";

import { PhysiciansList } from "../components/PhysiciansList";
import useFetch from "../hooks/useFetch";
import { useTimer } from "../hooks/useTimer";
import { IPhysician } from "../interfaces/Physician";
import PhysiciansContext from "../store/PhysiciansContext";

import classes from "./TodayPage.module.scss";

export const TodayPage = () => {
  const { data, status, sendRequest } = useFetch();
  const { physicians, setPhysicians } = useContext(PhysiciansContext);

  useTimer(() => {
    sendRequest(`${process.env.REACT_APP_BACKEND_URL}/physicians/`, "GET");
  }, 3e3);

  useEffect(() => {
    if (status === "fetched" && data) {
      //   updateEquipment(SerialNumber, data as IPhysician);
      setPhysicians(data as Array<IPhysician>);
    }
  }, [status]);

  return (
    <section className={classes.container}>
      <div className={classes.titles}>
        <section>
          <h1>{"صبح"}</h1>
        </section>
        <section>
          <h1>{"عصر"}</h1>
        </section>
      </div>
      <div className={classes.sections}>
        <section>
          <PhysiciansList
            physicians={physicians.filter((phy) => phy.startTime < "13:00")}
          />
        </section>
        <div className={classes.divider} />
        <section>
          <PhysiciansList
            physicians={physicians.filter((phy) => phy.startTime > "13:00")}
          />
        </section>
      </div>
    </section>
  );
};
