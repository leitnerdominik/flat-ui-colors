import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import classes from "./ColorField.module.css";

const colorField = ({ copyText, color, clicked }) => {
  return (
    <CopyToClipboard text={copyText} onCopy={clicked}>
      <button
        type="button"
        style={{
          background: `${color}`
        }}
        className={classes.Container}
        aria-label={`Copy ${copyText} color value`}
      >
        <span className={classes.Btn} aria-hidden="true">
          COPY
        </span>
        <span className={classes.ColorValue}>{copyText}</span>
      </button>
    </CopyToClipboard>
  );
};

export default colorField;
