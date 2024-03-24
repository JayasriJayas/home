import React, { Component } from 'react';
import '../App.css'; // Import CSS file

class Countdown extends Component {
  state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  componentDidMount() {
    const countDownDate = new Date("Jun 3, 2024 12:00:00").getTime();

    this.timerFunction = setInterval(() => {
      const currentDate = new Date().getTime();
      const finalTime = countDownDate - currentDate;

      if (finalTime > 0) {
        const days = Math.floor(finalTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((finalTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((finalTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((finalTime % (1000 * 60)) / 1000);

        this.setState({ days, hours, minutes, seconds });
      } else {
        clearInterval(this.timerFunction);
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerFunction);
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;

    return (
      <div className="countdown_time">
        <div className="days">
          <h1>{days}</h1>
          <h2>Day(s)</h2>
        </div>
        <div className="hours">
          <h1>{hours}</h1>
          <h2>Hour(s)</h2>
        </div>
        <div className="minutes">
          <h1>{minutes}</h1>
          <h2>Minute(s)</h2>
        </div>
        <div className="seconds">
          <h1>{seconds}</h1>
          <h2>Second(s)</h2>
        </div>
      </div>
    );
  }
}

export default Countdown;
