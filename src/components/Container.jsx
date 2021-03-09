import Clock from "./Clock";
import { useState } from "react";
import NewClock from "./NewClock";
import { calculateSeconds } from "../helpers";
const defaultClock = {
  hours: 0,
  minutes: 0,
  seconds: 0,
};

const defaultSeconds = 0;

const Container = (props) => {
  const [clocks, setClocks] = useState([]);
  const [editableClocks, setEditableClocks] = useState([]);
  const [autoID, setAutoId] = useState(0);

  const addNewEditableclock = () => {
    setEditableClocks([...editableClocks, { id: autoID, isEditing: true, startTime: defaultSeconds, relaxTime: defaultSeconds }]);
    setClocks([...clocks, { id: autoID, clock: defaultClock, relaxTimer: defaultClock }]);
    setAutoId(autoID + 1);
  };

  const addNewClock = (clockData) => {
    console.log(clockData);
    setClocks(
      clocks.map((element) => {
        if (element.id === clockData.id) {
          return { id: clockData.id, clock: clockData.clock, relaxTimer: clockData.relaxTimer };
        } else return element;
      })
    );
    // setClocks([...clocks, { id: clockData.id, clock: clockData.clock, relaxTimer: clockData.relaxTimer }]);
    setEditableClocks(
      editableClocks.map((element) => {
        if (element.id === clockData.id) {
          return { id: clockData.id, isEditing: false, startTime: defaultSeconds, relaxTime: defaultSeconds };
        } else return element;
      })
    );
  };

  const editClock = (clockData) => {
    setEditableClocks(
      editableClocks.map((element) => {
        if (element.id === clockData.id) {
          return { id: clockData.id, isEditing: true, startTime: clockData.startTime, relaxTime: clockData.relaxTime };
        } else return element;
      })
    );
  };

  const deleteClock = (element) => {
    setClocks(clocks.filter((item) => item.id !== element));
    setEditableClocks(editableClocks.filter((item) => item.id !== element));
  };

  const renderClocks = () => {
    return editableClocks.length
      ? editableClocks.map((c, index) =>
          c.isEditing ? (
            <li key={c.id}>
              <NewClock id={c.id} addNewClock={addNewClock} startTime={c.startTime} relaxTime={c.relaxTime} />
            </li>
          ) : (
            <li key={c.id}>
              <Clock
                editClock={editClock}
                id={c.id}
                isActive={true}
                startTime={calculateSeconds({
                  hours: clocks[index].clock.hours,
                  minutes: clocks[index].clock.minutes,
                  seconds: clocks[index].clock.seconds,
                })}
                relaxTime={calculateSeconds({
                  hours: clocks[index].relaxTimer.hours,
                  minutes: clocks[index].relaxTimer.minutes,
                  seconds: clocks[index].relaxTimer.seconds,
                })}
                deleteClock={deleteClock}
              />
            </li>
          )
        )
      : null;
  };

  return (
    <div className={"container"}>
      <button onClick={addNewEditableclock}>{"Add"}</button>
      <ul>{renderClocks()}</ul>
    </div>
  );
};

export default Container;
