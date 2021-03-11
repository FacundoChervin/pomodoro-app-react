import TimeInput from "./TimeInput";
import { padHMS, calculateSeconds, calculateHMS } from "../helpers";
import { useState } from "react";
import { Span } from "../styles/Buttons";
import styled from "styled-components";

const EditableClockContainer = styled.div`
  // background-color: ${(props) => (props.isWorking ? "#2892D7" : "#1D70A2")};
  padding: 5px;
  box-shadow: 2px 2px 2px rgba(40, 146, 215, 0.35);
  border-radius: 8px;
  background-color: #2892d7;
  width: 100%;
  font-size: 30px;
`;

const InputName = styled.input`
  width: 90%;
  background: none;
  color: white;
  font-weight: bold;
  font-size: 25px;
`;

const NewClock = (props) => {
  const [clock, setClock] = useState(calculateHMS(props.startTime));
  const [relaxTimer, setRelaxTimer] = useState(calculateHMS(props.relaxTime));

  const handleWorkHourChange = (e) => {
    setClock({ hours: e.target.value ? parseInt(e.target.value) : 0, minutes: clock.minutes, seconds: clock.seconds });
  };

  const handleWorkMinuteChange = (e) => {
    setClock({ hours: clock.hours, minutes: e.target.value ? parseInt(e.target.value) : 0, seconds: clock.seconds });
  };

  const handleWorkSecondChange = (e) => {
    setClock({ hours: clock.hours, minutes: clock.minutes, seconds: e.target.value ? parseInt(e.target.value) : 0 });
  };

  const handleRelaxHourChange = (e) => {
    setRelaxTimer({ hours: e.target.value ? parseInt(e.target.value) : 0, minutes: relaxTimer.minutes, seconds: relaxTimer.seconds });
  };
  const handleRelaxMinuteChange = (e) => {
    setRelaxTimer({ hours: relaxTimer.hours, minutes: e.target.value ? parseInt(e.target.value) : 0, seconds: relaxTimer.seconds });
  };
  const handleRelaxSecondChange = (e) => {
    setRelaxTimer({ hours: relaxTimer.hours, minutes: relaxTimer.minutes, seconds: e.target.value ? parseInt(e.target.value) : 0 });
  };
  const handleNameChange = (e) => {
    setClock({ ...clock, name: e.target.value });
  };

  const addNewClock = () => {
    props.addNewClock({ startTime: calculateSeconds(clock), relaxTime: calculateSeconds(relaxTimer), id: props.id, name: clock.name || props.name });
  };

  const deleteClock = () => {
    props.deleteClock(props.id);
  };

  const handleFocus = (event) => event.target.select();

  return (
    <EditableClockContainer>
      <InputName maxLength="12" type="text" value={clock.name || props.name} onChange={handleNameChange} onFocus={handleFocus} />
      <TimeInput
        title={"Work Time"}
        handleHourChange={handleWorkHourChange}
        hanldeMinuteChange={handleWorkMinuteChange}
        handleSecondChange={handleWorkSecondChange}
        timer={padHMS(clock)}
      />
      <TimeInput
        title={"Relax Time"}
        handleHourChange={handleRelaxHourChange}
        hanldeMinuteChange={handleRelaxMinuteChange}
        handleSecondChange={handleRelaxSecondChange}
        timer={padHMS(relaxTimer)}
      />
      <Span className="material-icons" onClick={addNewClock}>
        check_circle
      </Span>
      <Span className="material-icons" onClick={deleteClock}>
        delete
      </Span>
    </EditableClockContainer>
  );
};

export default NewClock;
