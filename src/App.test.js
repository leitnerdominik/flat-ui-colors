import React from 'react';
import { createRoot } from 'react-dom/client';
import App, { App as AppComponent, FEEDBACK_DURATION_MS } from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<App />);
  root.unmount();
});

const createAppInstance = () => {
  const app = new AppComponent({});
  app.setState = update => {
    const nextState =
      typeof update === 'function' ? update(app.state) : update;

    app.state = {
      ...app.state,
      ...nextState
    };
  };

  return app;
};

describe('feedback side effects', () => {
  const originalAudio = global.Audio;

  afterEach(() => {
    jest.useRealTimers();
    jest.restoreAllMocks();
    global.Audio = originalAudio;
  });

  it('keeps feedback visible for the full duration after rapid copy actions', () => {
    jest.useFakeTimers();
    global.Audio = jest.fn(() => ({
      play: jest.fn(),
      pause: jest.fn()
    }));
    const app = createAppInstance();

    app.showFeedbackMessage(0);
    jest.advanceTimersByTime(500);
    app.showFeedbackMessage(1);
    jest.advanceTimersByTime(FEEDBACK_DURATION_MS - 1);

    expect(app.state.showFeedback).toBe(true);

    jest.advanceTimersByTime(1);

    expect(app.state.showFeedback).toBe(false);
    expect(app.feedbackTimer).toBeNull();
  });

  it('does not break feedback when audio playback is rejected', async () => {
    jest.useFakeTimers();
    const play = jest.fn(() => Promise.reject(new Error('blocked')));
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    global.Audio = jest.fn(() => ({
      play,
      pause: jest.fn()
    }));
    const app = createAppInstance();

    expect(() => app.showFeedbackMessage(0)).not.toThrow();
    await Promise.resolve();

    expect(app.state.showFeedback).toBe(true);
    expect(errorSpy).not.toHaveBeenCalled();
    expect(logSpy).not.toHaveBeenCalled();
  });

  it('does not break feedback when audio playback throws synchronously', () => {
    jest.useFakeTimers();
    global.Audio = jest.fn(() => ({
      play: jest.fn(() => {
        throw new Error('blocked');
      }),
      pause: jest.fn()
    }));
    const app = createAppInstance();

    expect(() => app.showFeedbackMessage(0)).not.toThrow();

    expect(app.state.showFeedback).toBe(true);
  });
});
