import { useEffect, useRef, useState } from "react";

const Timer = () => {
  const timeRef = useRef(0);
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    let intervalId;
    if (running) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!running && time !== 0) {
      clearInterval(intervalId);
    } else if (pause) {
      if (running) {
        timeRef.current = time;
        setRunning(false);
      }
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [time, running, pause]);

  const startTimer = () => {
    if (!running) setRunning(!running);
  };

  const pauseTimer = () => {
    if (!pause && time !== 0) {
      setRunning(false);
      setPause(true);
    } else if (pause && time !== 0) {
      setRunning(true);
      setPause(false);
    }
  };

  const ResetTimer = () => {
    if (running) {
      setTime(0);
      setRunning(false);
    }
  };

  return (
    <>
      <div className="timer">
        <p className="text-2xl">StopWatch</p>

        <p>
          {`${time === 0 ? 0 : Math.floor(time / 60)} min`} {" : "}
          {`${time === 0 ? 0 : time % 60} sec`}
        </p>
        <button className="btn" onClick={startTimer}>
          Start Timer
        </button>
        <button className="btn" onClick={pauseTimer}>
          {pause ? "Resume" : "Pause"} Timer
        </button>
        <button className="btn" onClick={ResetTimer}>
          Reset Timer
        </button>
      </div>
    </>
  );
};

export default Timer;
