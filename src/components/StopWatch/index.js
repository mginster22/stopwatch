import React, { Component } from "react";
import styles from "../StopWatch/StopWatch.module.css";

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(0, 0, 0, 0, 0, 0),
    };
    this.timer = null;
  }
  tick = () => {
    this.setState((state) => {
      const newTime = state.time.getTime() + 1000;
      return { time: new Date(newTime) };
    });
  };

  handlerStart = (event) => {
    this.timer = setTimeout(this.tick, 10);
  };
  handlerStop = (event) => {
    clearTimeout(this.timer);
    this.timer = null;
  };
  handlerReset = (event) => {
    this.handlerStop();
    this.setState({ time: new Date(0, 0, 0, 0, 0, 0) });
  };

  componentDidUpdate() {
    if (this.timer !== null) {
      this.timer = null;
      this.handlerStart();
    }
  }
  render() {
    const { time } = this.state;
    return (
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.timer}>{time.toLocaleTimeString()}</h2>
          <div className={styles.wrapper__buttons}>
            <button
              className={styles.button + " " + styles.start}
              onClick={this.handlerStart}
            >
              start
            </button>
            <button
              className={styles.button + " " + styles.stop}
              onClick={this.handlerStop}
            >
              stop
            </button>
            <button
              className={styles.button + " " + styles.reset}
              onClick={this.handlerReset}
            >
              reset
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default StopWatch;
