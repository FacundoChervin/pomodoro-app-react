import TimeInput from "./TimeInput";
import { useState } from "react";

const NewClock = (props) => {
  const [clock, setClock] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [relaxTimer, setRelaxTimer] = useState({ hours: 0, minutes: 0, seconds: 0 });

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

  const addNewClock = () => {
    props.addNewClock({ clock, relaxTimer, id: props.id });
  };
  return (
    <div>
      <TimeInput
        title={"Work Time"}
        handleHourChange={handleWorkHourChange}
        hanldeMinuteChange={handleWorkMinuteChange}
        handleSecondChange={handleWorkSecondChange}
      />
      <TimeInput
        title={"Relax Time"}
        handleHourChange={handleRelaxHourChange}
        hanldeMinuteChange={handleRelaxMinuteChange}
        handleSecondChange={handleRelaxSecondChange}
      />
      <button onClick={addNewClock}>{"Confirm"}</button>
    </div>
  );
};

export default NewClock;