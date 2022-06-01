import React from "react";

import classes from "./TodayPage.module.scss";

export const TodayPage = () => {
  return (
    <section className={classes.container}>
      <div>
        <h1>{"پزشکان صبح"}</h1>
      </div>
      <div className={classes.divider} />
      <div>
        <h1>{"پزشکان عصر"}</h1>
      </div>
    </section>
  );
};
