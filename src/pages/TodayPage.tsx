import React, { useContext, useEffect } from "react";

import { PhysiciansList } from "../components/PhysiciansList";
import { Images } from "../constants/images";
import useFetch from "../hooks/useFetch";
import { useTimer } from "../hooks/useTimer";
import { IPhysician } from "../interfaces/Physician";
import PhysiciansContext from "../store/PhysiciansContext";

import classes from "./TodayPage.module.scss";

const FETCH_INTERVAL = 10e3;

export const TodayPage = () => {
  const { data, status, sendRequest } = useFetch();
  const { physicians, setPhysicians } = useContext(PhysiciansContext);

  useTimer(() => {
    sendRequest(`${process.env.REACT_APP_BACKEND_URL}/physicians/`, "GET");
  }, FETCH_INTERVAL);

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
          <Images.Morning className={classes.icon} />
          <h1>{"صبح"}</h1>
          {/* <h1>{physicians.filter((phy) => phy.startTime < "13:00").length}</h1> */}
        </section>
        <section>
          <Images.Evening className={classes.icon} />
          <h1>{"عصر"}</h1>
        </section>
      </div>
      <div className={classes.sections}>
        <section>
          <PhysiciansList
            physicians={physicians.filter((phy) => phy.startTime < "13:00")}
            scrollInterval={1e3}
          />
        </section>
        <div className={classes.divider} />
        <section>
          <PhysiciansList
            physicians={physicians.filter((phy) => phy.startTime > "13:00")}
            scrollInterval={2e3}
          />
        </section>
      </div>
    </section>
  );
};
