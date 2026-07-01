import React, { Component } from "react";

import ColorField from "./components/ColorField/ColorField";
import FeedbackMessage from "./components/FeedbackMessage/FeedbackMessage";
import Navigation from "./components/Navigation/Navigation";
import { formatColorValues } from "./utils/colorFormat";
import { COLORS } from "./utils/colorPalette";

import alarm from "./assets/sounds/alert.mp3";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFeedback: false,
      copyFormat: "hex-hash",
      colors: COLORS,
      soundOn: true
    };

    this.fields = 20;
    this.colorFields = [];
    this.feedback = null;
  }

  createColorFields() {
    const colorFields = [];
    for (let i = 0; i < this.fields; i++) {
      colorFields.push(
        <ColorField
          key={i}
          clicked={() => this.showFeedbackMessage(i)}
          copyText={this.state.colors[i]}
          color={COLORS[i]}
        />
      );
    }
    return colorFields;
  }

  showFeedbackMessage(index) {
    const feedback = (
      <FeedbackMessage
        copyText={this.state.colors[index]}
        color={COLORS[index]}
      />
    );
    this.setState({ showFeedback: true });
    this.feedback = feedback;

    const audio = new Audio(alarm);
    if (this.state.soundOn) {
      audio.play();
    }

    setTimeout(() => {
      audio.pause();
      this.setState({ showFeedback: false });
    }, 1000);
  }

  changeCopyFormat(event) {
    this.setState({ copyFormat: event.target.value }, this.calcColor);
  }

  calcColor() {
    this.setState({
      colors: formatColorValues(COLORS, this.state.copyFormat)
    });
  }

  toggleSoundHandler() {
    this.setState(prevState => ({ soundOn: !prevState.soundOn }));
  }

  render() {
    if (!this.state.showFeedback) {
      this.feedback = null;
    }

    const colorFields = this.createColorFields();
    return (
      <div className="App">
        <Navigation
          changed={this.changeCopyFormat.bind(this)}
          toggleSound={this.toggleSoundHandler.bind(this)}
          soundOn={this.state.soundOn}
        />
        <div className="ColorsContainer">
          {colorFields}
          {this.feedback}
        </div>
      </div>
    );
  }
}

export default App;
