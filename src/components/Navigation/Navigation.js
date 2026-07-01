import React from "react";
import classes from "./Navigation.module.css";

const navigation = ({ changed, toggleSound, soundOn }) => {
  let volumeClass = "fas fa-volume-up fa-lg";
  if (!soundOn) {
    volumeClass = "fas fa-volume-mute fa-lg";
  }

  return (
    <div className={classes.DropdownContainer}>
      <label className={classes.Title} htmlFor="copy-format">
        Copy Format:
      </label>
      <div className={classes.Dropdown}>
        <select
          id="copy-format"
          className={classes.Select}
          onChange={changed}
        >
          <option value="hex-hash">HEX(#AB11FF)</option>
          <option value="hex">HEX(AB11FF)</option>
          <option value="rgb">RGB(240, 255, 0)</option>
          <option value="rgba">RGBA(240, 255, 0, 0.3)</option>
        </select>
      </div>
      <button
        type="button"
        className={classes.Volume}
        onClick={toggleSound}
        aria-label={soundOn ? "Turn sound off" : "Turn sound on"}
        aria-pressed={soundOn}
      >
        <i className={volumeClass} aria-hidden="true" />
      </button>
    </div>
  );
};

export default navigation;
