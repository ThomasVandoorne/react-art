const Drawing = ({ radius, strokeWidth, red, green, blue, x, y, width }) => {
  return (
    <svg viewBox="0 0 100 100">
      {/* Background */}
      <rect fill="darkred" x={x} y={y} width={width} height="100" />
      <rect fill="yellow" x={x + width} y={y} width={width} height="100" />;
      <rect
        fill="darkred"
        x={x + width + width}
        y={y}
        width={width}
        height="100"
      />
      ;
      <rect
        fill="yellow"
        x={x + width + width + width}
        y={y}
        width={width}
        height="100"
      />
      ;
      <rect
        fill="darkred"
        x={x + width + width + width + width}
        y={y}
        width={width}
        height="100"
      />
      ;{/* Hair */}
      <rect fill="lightgray" x="40" y="65" width="20" height="20" />
      {/* Body */}
      <circle fill="red" cx="50" cy="100" r="27" />
      <circle fill="white" cx="50" cy="50" r="20" />
      {/* Eyes */}
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
        stroke="blue"
        cx="40"
        cy="50"
        r={radius}
      />
      <circle
        strokeWidth={strokeWidth}
        stroke="blue"
        cx="60"
        cy="50"
        r={radius}
      />
      {/* Hair */}
      <circle fill="green" cx="45" cy="35" r="10" />
      <circle fill="green" cx="60" cy="33" r="10" />
      <circle fill="green" cx="65" cy="40" r="8" />
      <circle fill="green" cx="30" cy="40" r="7.5" />
      {/* Nose */}
      <circle fill={`rgb(${red},${green}, ${blue})`} cx="50" cy="60" r="7.5" />
    </svg>
  );
};

export default Drawing;
