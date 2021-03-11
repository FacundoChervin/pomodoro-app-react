import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ClockWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  align-items: center;
  justify-content: space-around;
`;
const Title = styled.h3`
  color: white;
  font-style: italic;
  font-size: 18px;
  font-weight: 200;
  margin: 0.5vh;
`;

const InputNumber = styled.input`
  background: none;
  border-style: solid;
  border-color: white;
  border-width: 0.5px;
  color: white;
  border-radius: 4px;
  margin: 0.5vh 0px 0.5vh 0px;
  width: 25px;
  font-size: 15px;
`;

const DotEditClock = styled.span`
  background: none;
  color: white;
  margin: 0px 1px 0px 1px;
  font-weight: bold;
  width: 10px;
  font-size: 15px;
`;
const TimeInput = (props) => {
  const handleFocus = (event) => event.target.select();
  return (
    <InputContainer className={"input-container"}>
      <Title>{props.title}</Title>
      <ClockWrapper>
        <InputNumber
          type="number"
          onFocus={handleFocus}
          placeholder={"Hours"}
          value={props.timer.hours}
          name="hours"
          onChange={props.handleHourChange}
        />
        <DotEditClock>:</DotEditClock>
        <InputNumber
          type="number"
          onFocus={handleFocus}
          placeholder={"Minutes"}
          value={props.timer.minutes}
          name="minutes"
          onChange={props.hanldeMinuteChange}
        />
        <DotEditClock>:</DotEditClock>
        <InputNumber
          type="number"
          onFocus={handleFocus}
          placeholder={"Seconds"}
          value={props.timer.seconds}
          name="seconds"
          onChange={props.handleSecondChange}
        />
      </ClockWrapper>
    </InputContainer>
  );
};

export default TimeInput;
