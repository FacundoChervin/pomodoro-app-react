import { useState } from "react";
import useInterval from "../hooks/useInterval";

import React from "react";

const Clock = (props) => {
  const [isActive, setIsActive] = useState(props.isActive);
  const [seconds, setSeconds] = useState(props.startTime);
  const [isWorking, setIsWorking] = useState(true);
  const workTime = props.startTime;
  const relaxTime = props.relaxTime;

  const pause = () => {
    setIsActive((isActive) => (isActive ? false : true));
  };

  const stop = () => {
    setIsActive(() => false);
    setSeconds(() => 0);
  };

  const deleteClock = () => {
    props.deleteClock(props.id);
  };

  const editClock = () => {
    setIsActive(false);
    props.editClock({ id: props.id, startTime: props.startTime, relaxTime: props.relaxTime });
  };
  useInterval(
    () => {
      setSeconds(seconds > 0 ? seconds - 1 : isWorking ? relaxTime : workTime);
      setIsWorking(seconds === 0 ? !isWorking : isWorking);
    },
    isActive && seconds >= 0 ? 1000 : null
  );

  return (
    <div className={"clock_container"}>
      <span>{`${Math.floor(seconds / 3600)}`.padStart(2, "0")}</span>:<span>{`${Math.floor(seconds / 60) % 60}`.padStart(2, "0")}</span>:
      <span>{`${Math.floor(seconds % 60)}`.padStart(2, "0")}</span>
      <button onClick={pause}>{isActive === true ? "Pause" : "Play"}</button>
      <button onClick={stop}>{isActive === true ? "Stop" : "Play"}</button>
      <button onClick={deleteClock}>Delete</button>
      <button onClick={editClock}>Edit</button>
    </div>
  );
};

export default Clock;
