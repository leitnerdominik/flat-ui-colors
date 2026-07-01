import React from "react";
import classes from "./Navigation.module.css";

const navigation = ({ changed, toggleSound, soundOn }) => {
  let volumeClass = "fas fa-volume-up fa-lg";
  if (!soundOn) {
    volumeClass = "fas fa-volume-mute fa-lg";
  }

  return (
    <nav className={classes.Toolbar} aria-label="Color copy settings">
      <div className={classes.FormatControl}>
        <label className={classes.Label} htmlFor="copy-format">
          Copy Format
        </label>
        <div className={classes.SelectWrap}>
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
      </div>
      <button
        type="button"
        className={classes.SoundButton}
        onClick={toggleSound}
        aria-label={soundOn ? "Turn sound off" : "Turn sound on"}
        aria-pressed={soundOn}
      >
        <i className={volumeClass} aria-hidden="true" />
      </button>
    </nav>
  );
};

export default navigation;
