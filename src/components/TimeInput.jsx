import styled from "styled-components";

const InputContainer = styled.div``;

const Title = styled.h3`
  color: white;
  font-style: italic;
  font-size: 12px;
  font-weight: 200;
  margin: 0.8vh;
`;

const TimeInput = (props) => {
  const handleFocus = (event) => event.target.select();
  return (
    <InputContainer className={"input-container"}>
      <Title>{props.title}</Title>
      <input type="number" onFocus={handleFocus} placeholder={"Hours"} value={props.hoursValue} name="hours" onChange={props.handleHourChange} />
      <span>:</span>
      <input
        type="number"
        onFocus={handleFocus}
        placeholder={"Minutes"}
        value={props.minutesValue}
        name="minutes"
        onChange={props.hanldeMinuteChange}
      />
      <span>:</span>
      <input
        type="number"
        onFocus={handleFocus}
        placeholder={"Seconds"}
        value={props.secondsValue}
        name="seconds"
        onChange={props.handleSecondChange}
      />
    </InputContainer>
  );
};

export default TimeInput;
