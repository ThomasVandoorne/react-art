const ColorPicker = ({ onColorChange }) => {
  return (
    <div>
      <input type="color" onChange={(e) => onColorChange(e.target.value)} />
    </div>
  );
};

export default ColorPicker;
