import React from "react";
import css from "./Semicolon.module.css";

const Semicolon = () => {
  return (
    <div className={`mx-4 ${css.semicolon}`}>
      <div className={`${css.semicolonBox} ${css.upper}`}></div>

      <div className={`${css.semicolonBox} ${css.bottom}`}></div>
    </div>
  );
};

export default Semicolon;
