const Slider = ({ onValueChange, value, max, min, label }) => {
  return (
    <label>
      <span>{label}</span>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onValueChange}
      />
      <span>{value}</span>
    </label>
  );
};

export default Slider;
