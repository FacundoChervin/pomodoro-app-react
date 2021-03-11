const calculateSeconds = (clock) => {
  const { hours, minutes, seconds } = clock;

  let time = parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
  return time;
};

const calculatePadHMS = (time) => {
  const hours = `${Math.floor(time / 3600)}`.padStart(2, "0");
  const minutes = `${Math.floor(time / 60) % 60}`.padStart(2, "0");
  const seconds = `${Math.floor(time % 60)}`.padStart(2, "0");

  return { hours, minutes, seconds };
};

const padHMS = (clock) => {
  const hours = `${clock.hours}`.padStart(2, "0");
  const minutes = `${clock.minutes}`.padStart(2, "0");
  const seconds = `${clock.seconds}`.padStart(2, "0");

  return { hours, minutes, seconds };
};

const calculateHMS = (time) => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor(time / 60) % 6;
  const seconds = Math.floor(time % 60);

  return { hours, minutes, seconds };
};

export { calculateSeconds, calculateHMS, calculatePadHMS, padHMS };
