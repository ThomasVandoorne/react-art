const Drawing = ({
  radius,
  strokeWidth,
  red,
  x,
  y,
  width,
  opacity,
  haircolor,
  eyecolor,
}) => {
  return (
    <svg viewBox="0 0 100 100">
      {/* Background */}
      <rect
        fill="darkred"
        x={x}
        y={y}
        width={width}
        height="100"
        opacity="0.9"
      />
      <rect
        fill="yellow"
        x={width}
        y={y}
        width={width}
        height="100"
        opacity="0.9"
      />
      ;
      <rect
        fill="darkred"
        x={2 * width}
        y={y}
        width={width}
        height="100"
        opacity="0.9"
      />
      ;
      <rect
        fill="yellow"
        x={3 * width}
        y={y}
        width={width}
        height="100"
        opacity="0.9"
      />
      ;
      <rect
        fill="darkred"
        x={4 * width}
        y={y}
        width={width}
        height="100"
        opacity="0.9"
      />
<<<<<<< HEAD
      ;{/* Neck */}
      <rect fill="lightgray" x="40" y="65" width="20" height="20" />
      {/* Body */}
      <circle fill="orange" cx="50" cy="100" r="27" />
      <circle fill="white" cx="50" cy="50" r="20" />
      {/* Mouth */}
      <rect fill="red" x="42" y="65" width="16" height="2" opacity="0.9" />
=======

      ;{/* Body */}
      <rect fill="lightgray" x="40" y="65" width="20" height="20" />
      <circle fill="orange" cx="50" cy="100" r="27" />
      <circle fill="white" cx="50" cy="50" r="20" />

      {/* Mouth */}
      <rect fill="red" x="42" y="65" width="16" height="2" opacity="0.9" />
      
>>>>>>> develop
      {/* Eyes */}
      <circle
        strokeWidth="2"
        stroke="black"
        fill="white"
        cx="40"
        cy="50"
        r="8"
      />
      <circle
        strokeWidth="2"
        stroke="black"
        fill="white"
        cx="60"
        cy="50"
        r="8"
      />
      <circle
        strokeWidth={strokeWidth}
        stroke={eyecolor}
        cx="40"
        cy="50"
        r={radius}
      />
      <circle
        strokeWidth={strokeWidth}
        stroke={eyecolor}
        cx="60"
        cy="50"
        r={radius}
      />
      {/* Hair */}
      <circle fill={haircolor} cx="45" cy="35" r="10" />
      <circle fill={haircolor} cx="60" cy="33" r="10" />
      <circle fill={haircolor} cx="65" cy="40" r="8" />
      <circle fill={haircolor} cx="33" cy="40" r="7.5" />
      {/* Nose */}
<<<<<<< HEAD
      <polygon fill="lightgray" points="50 50, 55 63, 45 63" />
=======
      <polygon fill="lightgray" points="50 50, 55 60, 45 60" />
      <circle fill="lightgray" cx="50" cy="60" r="5" />
>>>>>>> develop
      <circle
        fill={`rgb(${red},0, 0)`}
        cx="50"
        cy="60"
        r="7.5"
        opacity={opacity}
      />
    </svg>
  );
};

export default Drawing;
