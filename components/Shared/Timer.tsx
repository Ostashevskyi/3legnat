"use client";

import { useState, useEffect } from "react";
import TimerNumber from "./TimerNumber";

const Timer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<number>(3 * 24 * 60 * 60); // 3 days in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    return num < 10 ? `0${num}` : num.toString();
  };

  const days = Math.floor(timeLeft / (24 * 60 * 60));
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex gap-4">
      <TimerNumber timerNumber={formatNumber(days)} title="Days" />
      <TimerNumber timerNumber={formatNumber(hours)} title="Hours" />
      <TimerNumber timerNumber={formatNumber(minutes)} title="Minutes" />
      <TimerNumber timerNumber={formatNumber(seconds)} title="Seconds" />
    </div>
  );
};

export default Timer;
