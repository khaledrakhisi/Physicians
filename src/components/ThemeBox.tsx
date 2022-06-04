import React, { useContext } from "react";

import ThemeContext, { ETheme } from "../store/ThemeContext";

import classes from "./ThemeBox.module.scss";

function ThemeBox() {
  // const [theme, setTheme] = useState("light");
  const themeCtx = useContext(ThemeContext);

  return (
    <section
      className={classes.themeBox}
      onClick={() => themeCtx.toggleTheme()}
    >
      <div
        className={`${classes.toggle} ${
          themeCtx.theme === ETheme.dark ? classes.darkMode : ""
        }`}
      />
    </section>
  );
}

export default ThemeBox;
