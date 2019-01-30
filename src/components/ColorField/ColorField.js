import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import classes from "./ColorField.module.css";

const colorField = ({ copyText, color, clicked }) => {
  return (
    <CopyToClipboard
    text={copyText}
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
      <span>{copyText}</span>
    </div>
    </CopyToClipboard>
  );
};

export default colorField;
