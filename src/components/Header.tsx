import { useState } from "react";

import { useTimer } from "../hooks/useTimer";
import { getTodayFullDate } from "../utils/utils";

import ThemeBox from "./ThemeBox";

import "./Header.module.scss";

const TIME_INTERVAL = 36e5; // 1 hour

const Header = () => {
  const [todayDate, setTodayDate] = useState<string>(getTodayFullDate());

  useTimer(() => {
    setTodayDate(getTodayFullDate());
  }, TIME_INTERVAL);

  return (
    <header>
      <h1>{"نوبت های حضوری امروز"}</h1>
      <span>
        <h1>{todayDate}</h1>
      </span>
      <ThemeBox />
    </header>
  );
};

export default Header;
