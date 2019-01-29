import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import classes from "./ColorField.module.css";

const colorField = ({ color, clicked }) => {
  return (
    <CopyToClipboard
    text={color}
    onCopy={() => console.log("COPIED ", color)}
  >
    <div
      style={{
        background: `${color}`
      }}
      onClick={clicked}
      className={classes.Container}
    >
      <button className={classes.Btn}>COPY</button>
      <span>{color}</span>
    </div>
    </CopyToClipboard>
  );
};

export default colorField;
