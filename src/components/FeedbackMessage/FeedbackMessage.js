import React from "react";
import classes from "./FeedbackMessage.module.css";

const feedbackMessage = ({color, copyText}) => {

    const messages = ["It will rock!", "Great choice!", "Paste me!", "Copied!"];

    const randomMessageIndex = Math.floor(Math.random() * messages.length);

    return (
        <div style={{
            background: `${color}`
        }} className={classes.Container}>
            <div className={classes.MessageContainer}>
            <span className={classes.Message}>{messages[randomMessageIndex]}</span>
            </div>
            <span className={classes.Color}>{copyText}</span>
        </div>
    );
};

export default feedbackMessage;