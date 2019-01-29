import React, { Component } from "react";

import ColorField from "./components/ColorField/ColorField";
import FeedbackMessage from "./components/FeedbackMessage/FeedbackMessage";
import { colors } from "./utils/colorPalette";

import alarm from './assets/sounds/alert.mp3';

import "./App.css";

class App extends Component {
  state = {
    fields: 20,
    colorFields: [],
    feedback: null,
  };

  componentDidMount() {
    const colorFields = [];
    for (let i = 0; i < this.state.fields; i++) {
      colorFields.push(
        <ColorField
          key={i}
          clicked={() => this.showFeedbackMessage(i)}
          color={colors[i]}
        />
      );
    }
    this.setState({ colorFields });
  }

  showFeedbackMessage(index) {
    const audio = new Audio(alarm);
    const feedback = <FeedbackMessage color={colors[index]} />;
    this.setState({ feedback });
    audio.play();
    setTimeout(() => {
      audio.pause();
      this.setState({ feedback: null });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        {this.state.colorFields}
        {this.state.feedback}
      </div>
    );
  }
}

export default App;
