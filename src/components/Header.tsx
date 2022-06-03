import { useState } from "react";

import { useTimer } from "../hooks/useTimer";
import { generateLightColorHex, getTodayFullDate } from "../utils/utils";

import "./Header.module.scss";

const Header = () => {
  const [headerBGColor, setHeaderBGColor] = useState<string>("#fff");
  const [todayDate, setTodayDate] = useState<string>("");

  useTimer(() => {
    setHeaderBGColor(generateLightColorHex());
    setTodayDate(getTodayFullDate());
  }, 5e3);

  return (
    <header style={{ backgroundColor: headerBGColor }}>
      <h1>{"نوبت های حضوری امروز"}</h1>
      <span>
        <h1>{todayDate}</h1>
      </span>
    </header>
  );
};

export default Header;
