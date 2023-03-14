import { useState } from "react";
import "./App.css";
import Slider from "./components/Slider";
import Drawing from "./components/Drawing";

const day = { backgroundColor: "lightblue" };
const night = { backgroundColor: "gray" };

function App() {
  const [color, setColor] = useState(day);
  const [visible, setVisible] = useState(true);
  const [number, setNumber] = useState(5);
  const [style, setStyle] = useState({
    radius: 5,
    red: 255,
    green: 0,
    blue: 0,
  });

  const handleChangeRadius = (e) => {
    setStyle({
      ...style,
      radius: e.target.value,
    });
  };

  const handleChangeRed = (e) => {
    setStyle({
      ...style,
      red: e.target.value,
    });
  };
  const handleChangeGreen = (e) => {
    setStyle({
      ...style,
      green: e.target.value,
    });
  };
  const handleChangeBlue = (e) => {
    setStyle({
      ...style,
      blue: e.target.value,
    });
  };

  const handleChangeStroke = (e) => {
    setNumber(e.target.value);
  };

  return (
    <div className="App">
      <h1>Customize your Clown</h1>

      <div>
        <h2>Eyes</h2>
        <Slider
          min={2}
          max={5}
          label="Pupil Size"
          onValueChange={handleChangeRadius}
        />
        <input
          label="Iris size"
          type="number"
          min="1"
          max="5"
          value={number}
          onChange={handleChangeStroke}
        />
      </div>
      <div>
        <h2>Nose</h2>
        <Slider max={255} label="RED" onValueChange={handleChangeRed} />
        <br />
        <Slider max={255} label="GREEN" onValueChange={handleChangeGreen} />
        <br />
        <Slider max={255} label="BLUE" onValueChange={handleChangeBlue} />
      </div>
      <div className="canvas" style={color}>
        {visible === true && (
          <Drawing
            radius={style.radius}
            strokeWidth={number}
            red={style.red}
            green={style.green}
            blue={style.blue}
          />
        )}
      </div>

      <button onClick={() => setColor(night)}>night</button>
      <button onClick={() => setColor(day)}>day</button>
      <button onClick={() => setVisible(!visible)}>Circle</button>
    </div>
  );
}

export default App;
