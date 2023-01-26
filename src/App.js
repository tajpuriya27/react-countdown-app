import "./App.css";
import React, { useState } from "react";

function App() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  function startTimer() {
    const countdownDate = new Date("Jan 26, 2023 15:00:00").getTime();

    setInterval(() => {
      const now = new Date().getTime();
      const remTime = countdownDate - now;

      const days = Math.floor(remTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (remTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((remTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remTime % (1000 * 60)) / 1000);
      if (remTime > 0) {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      } else {
        //if remTime < 0
        setTimerDays("00");
        setTimerHours("00");
        setTimerMinutes("00");
        setTimerSeconds("00");
        clearInterval();
      }
    }, 1000);
  }

  startTimer();

  return (
    <section className="timer-container">
      <section className="timer">
        <div>
          <span className="mdi mdi-calendar-clock timer-icon"></span>
          <h2>Countdown Timer</h2>
          <p>Countdown to a really special date. One you could need to use.</p>
        </div>
        <div>
          <section>
            <p>{timerDays}</p>
            <p>
              <small>Days</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>{timerHours}</p>
            <p>
              <small>Hours</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>{timerMinutes}</p>
            <p>
              <small>Minutes</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>{timerSeconds}</p>
            <p>
              <small>Seconds</small>
            </p>
          </section>
        </div>
      </section>
    </section>
  );
}

export default App;
