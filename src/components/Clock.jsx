import { useState } from "react";
import useInterval from "../hooks/useInterval";
import styled from "styled-components";
import React from "react";
import { Span } from "../styles/Buttons";
const ClockContainer = styled.div`
  padding: 5px;
  box-shadow: 2px 2px 2px rgba(40, 146, 215, 0.35);
  border-radius: 8px;
  background-color: #2892d7;
  width: 100%;
`;

const ClockCeld = styled.span`
  color: ${(props) => (props.isWorking ? "red" : "green")};
`;

const PomodoroName = styled.h3`
  color: white;
  font-weight: 300;
  margin: 1vh;
  text-decoration: underline;
`;

const ClockWrapper = styled.div`
  background-color: white;
  width: 50%;
  margin: 0 auto;
  border-radius: 5px;
`;

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
    props.editClock({ id: props.id, startTime: props.startTime, relaxTime: props.relaxTime, name: props.name });
  };
  useInterval(
    () => {
      setSeconds(seconds > 0 ? seconds - 1 : isWorking ? relaxTime : workTime);
      setIsWorking(seconds === 0 ? !isWorking : isWorking);
    },
    isActive && seconds >= 0 && relaxTime && workTime ? 1000 : null
  );

  return (
    <ClockContainer className={"clock_container"}>
      <PomodoroName>{props.name}</PomodoroName>
      <ClockWrapper>
        <ClockCeld isWorking={isWorking}>{`${Math.floor(seconds / 3600)}`.padStart(2, "0")}</ClockCeld>
        <ClockCeld isWorking={isWorking}>:</ClockCeld>
        <ClockCeld isWorking={isWorking}>{`${Math.floor(seconds / 60) % 60}`.padStart(2, "0")}</ClockCeld>
        <ClockCeld isWorking={isWorking}>:</ClockCeld>
        <ClockCeld isWorking={isWorking}>{`${Math.floor(seconds % 60)}`.padStart(2, "0")}</ClockCeld>
      </ClockWrapper>
      <div className="button_wrapper">
        <Span className="material-icons" onClick={pause}>
          {isActive === true ? "pause_circle" : "play_circle"}
        </Span>
        <Span className="material-icons" onClick={stop}>
          {isActive === true ? "stop" : ""}
        </Span>
        <Span className="material-icons" onClick={deleteClock}>
          delete
        </Span>
        <Span className="material-icons" onClick={editClock}>
          mode_edit
        </Span>
      </div>
    </ClockContainer>
  );
};

export default Clock;
