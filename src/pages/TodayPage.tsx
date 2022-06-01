import React from "react";

import { PhysiciansList } from "../components/PhysiciansList";
import useFetch from "../hooks/useFetch";
import { useTimer } from "../hooks/useTimer";

import classes from "./TodayPage.module.scss";

export const TodayPage = () => {
  const { data, status, sendRequest } = useFetch();
  useTimer(() => {
    sendRequest(`${process.env.REACT_APP_BACKEND_URL}/physicians/`, "GET");
  }, 3e4);

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
          <PhysiciansList physicians={phy} />
        </section>
        <div className={classes.divider} />
        <section></section>
      </div>
    </section>
  );
};
