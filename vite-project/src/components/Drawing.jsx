const Drawing = ({ radius, strokeWidth }) => {
  return (
    <svg viewBox="0 0 100 100">
      <circle stroke="red" cx="50" cy="50" r={radius} />
      <circle stroke-width={strokeWidth} opacity="10" stroke="blue" cx="50" cy="50" r="1" />
    </svg>
  );
};

export default Drawing;
