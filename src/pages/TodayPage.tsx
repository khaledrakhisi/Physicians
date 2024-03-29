import React, { useContext, useEffect } from "react";

import { Messagebox } from "../components/Messagebox";
import { PhysiciansList } from "../components/PhysiciansList";
import { config } from "../config/config";
import { Images } from "../constants/images";
import useFetch from "../hooks/useFetch";
import { useTimer } from "../hooks/useTimer";
import { IAPIResponse } from "../interfaces/APIResponse";
import PhysiciansContext from "../store/PhysiciansContext";
import ThemeContext, { ETheme } from "../store/ThemeContext";
import UIContext from "../store/UIContext";
import {
  convertTo24HoursFormat,
  getCurrentTime,
  getStartEndTime,
  getTodayDate,
} from "../utils/utils";

import classes from "./TodayPage.module.scss";

export const TodayPage = () => {
  const {
    data: response,
    status,
    sendRequest,
    error,
  } = useFetch<IAPIResponse>();
  const { physicians, setPhysicians } = useContext(PhysiciansContext);
  const themeContext = useContext(ThemeContext);
  const uiContext = useContext(UIContext);

  useTimer(() => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "*");
    headers.append("Authorization", `Bearer ${process.env.REACT_APP_API_KEY}`);

    sendRequest(
      `${process.env.REACT_APP_BACKEND_URL}/doctors/get-doctor-today/`,
      {
        // mode: "no-cors",
        method: "GET",
        cache: "no-cache",
        credentials: "include",
        headers,
      }
    );

    // Automatic theme change based on the day Hour
    if (
      getCurrentTime().includes(config.eveningThreshold) &&
      themeContext.theme !== ETheme.dark
    ) {
      themeContext.setTheme(ETheme.dark);
    } else if (
      getCurrentTime().includes(config.nightThreshold) &&
      themeContext.theme !== ETheme.light
    ) {
      themeContext.setTheme(ETheme.light);
    }
  }, config.fetch_interval);

  useEffect(() => {
    if (status === "fetched" && response) {
      if (response.data) {
        setPhysicians(response.data.doctorsLists);
      }

      if (uiContext.isMessageboxVisible) {
        uiContext.setMessageboxVisiblity(false);
      }
    } else if (status === "error") {
      uiContext.setMessageboxVisiblity(true);
    }
  }, [status]);

  return (
    <section className={classes.container}>
      <Messagebox
        hasOkButton
        message={error || ""}
        title={"خطا در دریافت اطلاعات"}
      />

      <div className={classes.titles}>
        <section>
          <Images.Morning className={classes.icon} />
          <h1>{"صبح"}</h1>
        </section>
        <section>
          <Images.Evening className={classes.icon} />
          <h1>{"عصر"}</h1>
        </section>
      </div>
      <div className={classes.sections}>
        <React.Fragment>
          <section>
            <PhysiciansList
              physicians={physicians
                .filter((phy) => {
                  return (
                    convertTo24HoursFormat(
                      new Date(
                        `${getTodayDate()} ${
                          getStartEndTime(phy.doctorVisitTime)[0]
                        }`
                      )
                    ) <
                    convertTo24HoursFormat(
                      new Date(`${getTodayDate()} ${config.morningThreshold}`)
                    )
                  );
                })
                .sort((a, b) => {
                  return b.remain - a.remain;
                })}
              scrollInterval={config.scrollInterval_right}
            />
          </section>

          <div className={classes.divider} />
          <section>
            <PhysiciansList
              physicians={physicians
                .filter(
                  (phy) =>
                    convertTo24HoursFormat(
                      new Date(
                        `${getTodayDate()} ${
                          getStartEndTime(phy.doctorVisitTime)[0]
                        }`
                      )
                    ) >
                    convertTo24HoursFormat(
                      new Date(`${getTodayDate()} ${config.morningThreshold}`)
                    )
                )
                .sort((a, b) => {
                  return b.remain - a.remain;
                })}
              scrollInterval={config.scrollInterval_left}
            />
          </section>
        </React.Fragment>
      </div>
    </section>
  );
};
