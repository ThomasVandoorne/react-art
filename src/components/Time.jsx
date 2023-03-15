const Time = ({ setColor, time, timeText }) => {
  return (
    <button
      onClick={() => {
        setColor({ time });
      }}
    >
      {timeText}
    </button>
  );
};

export default Time;
