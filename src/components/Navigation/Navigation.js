import React from "react";
import classes from "./Navigation.module.css";

const navigation = ({ changed, toggleSound, soundOn }) => {
  let volumeClass = "fas fa-volume-up fa-lg";
  if (!soundOn) {
    volumeClass = "fas fa-volume-mute fa-lg";
  }

  return (
    <div className={classes.DropdownContainer}>
      <h3 className={classes.Title}>Copy Format: </h3>
      <div className={classes.Dropdown}>
        <select className={classes.Select} onChange={changed}>
          <option value="hex-hash">HEX(#AB11FF)</option>
          <option value="hex">HEX(AB11FF)</option>
          <option value="rgb">RGB(240, 255, 0)</option>
          <option value="rgba">RGBA(240, 255, 0, 0.3)</option>
        </select>
      </div>
      <div className={classes.Volume} onClick={toggleSound}>
        <i className={volumeClass} />
      </div>
    </div>
  );
};

export default navigation;
