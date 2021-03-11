import Clock from "./Clock";
import { useState } from "react";
import styled from "styled-components";
import NewClock from "./NewClock";
import { Span } from "../styles/Buttons";

const defaultName = "Pomodoro";
const Wrapper = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
`;

const ClockWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const defaultSeconds = 0;

const Container = (props) => {
  const [clocks, setClocks] = useState([]);
  const [autoID, setAutoId] = useState(0);

  const addNewEditableclock = () => {
    setClocks([...clocks, { id: autoID, startTime: defaultSeconds, relaxTime: defaultSeconds, name: defaultName, isEditing: true }]);
    setAutoId(autoID + 1);
  };

  const addNewClock = (clockData) => {
    setClocks(
      clocks.map((element) => {
        if (element.id === clockData.id) {
          return { id: clockData.id, startTime: clockData.startTime, relaxTime: clockData.relaxTime, name: clockData.name, isEditing: false };
        } else return element;
      })
    );
  };

  const editClock = (clockData) => {
    setClocks(
      clocks.map((element) => {
        if (element.id === clockData.id) {
          return { name: clockData.name, id: clockData.id, isEditing: true, startTime: clockData.startTime, relaxTime: clockData.relaxTime };
        } else return element;
      })
    );
  };

  const deleteClock = (element) => {
    setClocks(clocks.filter((item) => item.id !== element));
  };

  const renderClocks = () => {
    return clocks.length
      ? clocks.map((c) =>
          c.isEditing ? (
            <li key={c.id}>
              <NewClock name={c.name} id={c.id} addNewClock={addNewClock} startTime={c.startTime} relaxTime={c.relaxTime} />
            </li>
          ) : (
            <li key={c.id}>
              <Clock
                name={c.name}
                editClock={editClock}
                id={c.id}
                isActive={true}
                startTime={c.startTime}
                relaxTime={c.relaxTime}
                deleteClock={deleteClock}
              />
            </li>
          )
        )
      : null;
  };

  return (
    <Wrapper className={"container"}>
      <Span hoverColor="white" className="material-icons" onClick={addNewEditableclock} mainButton={true}>
        add_circle
      </Span>
      <ClockWrapper>{renderClocks()}</ClockWrapper>
    </Wrapper>
  );
};

export default Container;
