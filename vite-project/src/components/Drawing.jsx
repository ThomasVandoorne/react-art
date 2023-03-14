const Drawing = ({ radius, strokeWidth, red, green, blue }) => {
  return (
    <svg viewBox="0 0 100 100">
      <circle fill="white" cx="50" cy="50" r="20" />
      <circle
        strokeWidth="2"
        stroke="black"
        fill="white"
        cx="40"
        cy="50"
        r="10"
      />

      <circle
        strokeWidth="2"
        stroke="black"
        fill="white"
        cx="60"
        cy="50"
        r="10"
      />
      <circle
        strokeWidth={strokeWidth}
        stroke="green"
        cx="40"
        cy="50"
        r={radius}
      />
      <circle
        strokeWidth={strokeWidth}
        stroke="green"
        cx="60"
        cy="50"
        r={radius}
      />
      <circle fill={`rgb(${red},${green}, ${blue})`} cx="50" cy="60" r="7.5" />
    </svg>
  );
};

export default Drawing;
