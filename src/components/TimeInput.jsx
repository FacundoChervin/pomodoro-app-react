const TimeInput = (props) => {
  const handleFocus = (event) => event.target.select();
  return (
    <div className={"input-container"}>
      <h2>{props.title}</h2>
      <input type="number" onFocus={handleFocus} placeholder={"Hours"} value={props.hoursValue} name="hours" onChange={props.handleHourChange} />
      {":"}
      <input
        type="number"
        onFocus={handleFocus}
        placeholder={"Minutes"}
        value={props.minutesValue}
        name="minutes"
        onChange={props.hanldeMinuteChange}
      />
      {":"}
      <input
        type="number"
        onFocus={handleFocus}
        placeholder={"Seconds"}
        value={props.secondsValue}
        name="seconds"
        onChange={props.handleSecondChange}
      />
    </div>
  );
};

export default TimeInput;
