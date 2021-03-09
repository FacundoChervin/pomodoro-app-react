const TimeInput = (props) => {
  return (
    <div className={"input-container"}>
      <h2>{props.title}</h2>
      <input type="number" placeholder={"Hours"} name="hours" onChange={props.handleHourChange} />
      {":"}
      <input type="number" placeholder={"Minutes"} name="minutes" onChange={props.hanldeMinuteChange} />
      {":"}
      <input type="number" placeholder={"Seconds"} name="seconds" onChange={props.handleSecondChange} />
    </div>
  );
};

export default TimeInput;
