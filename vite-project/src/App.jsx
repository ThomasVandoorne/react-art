import { useState } from "react";
import "./App.css";
import Slider from "./components/Slider";
import Drawing from "./components/Drawing";

const day = { backgroundColor: "lightblue" };
const night = { backgroundColor: "gray" };

function App() {
  const [radius, setRadius] = useState(5);
  const [color, setColor] = useState(day);
  const [visible, setVisible] = useState(false);
  const [number, setNumber] = useState(5);
  console.log(number);

  const handleChangeStroke = (e) => {
    setNumber(e.target.value);
  };

  const handleChangeRadius = (e) => {
    setRadius(e.target.value);
  };

  return (
    <div className="App">
      <Slider
        max={10}
        label="Radius"
        value={radius}
        onValueChange={handleChangeRadius}
      />

      <div className="canvas" style={color}>
        {visible === true && <Drawing radius={radius} strokeWidth={number} />}
      </div>

      <button onClick={() => setColor(night)}>night</button>
      <button onClick={() => setColor(day)}>day</button>
      <button onClick={() => setVisible(!visible)}>Circle</button>
      <input
        type="number"
        min="1"
        max="10"
        value={number}
        onChange={handleChangeStroke}
      />
    </div>
  );
}

export default App;
