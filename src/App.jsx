import { useState } from "react";
import "./App.css";
import Slider from "./components/Slider";
import Drawing from "./components/Drawing";
import ColorPicker from "./components/ColorPicker";

const day = { backgroundColor: "white" };
const night = { backgroundColor: "black" };

function App() {
  const [color, setColor] = useState(day);
  const [visible, setVisible] = useState(false);
  const [number, setNumber] = useState(1.5);
  const [opacity, setOpacity] = useState(0);
  const [haircolor, setHaircolor] = useState("orange");
  const [eyecolor, setEyecolor] = useState("red");
  const [rect, setRect] = useState({
    width: 20,
  });

  const handleSetHaircolor = (e) => {
    setHaircolor(e);
  };

  const handleSetEyecolor = (e) => {
    setEyecolor(e);
  };
  const [style, setStyle] = useState({
    radius: 5,
    red: 255,
  });

  const handleChangeRect = (e) => {
    setRect({
      ...rect,
      width: 100 / e.target.value,
    });
  };

  const handleChangeOpacity = (e) => {
    opacity === 0 ? setOpacity(1) : setOpacity(0);
  };

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

  const handleChangeStroke = (e) => {
    setNumber(e.target.value);
  };

  return (
    <div className="App">
      <div>
        <h1>Customize your Clownwallpaper</h1>

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
            step="0.1"
            max="2.5"
            value={number}
            onChange={handleChangeStroke}
          />
          <ColorPicker onColorChange={handleSetEyecolor} />
        </div>

        <div>
          <h2>Nose</h2>
          <button
            onClick={() => {
              setVisible(!visible);
              handleChangeOpacity();
            }}
          >
            Clownnose
          </button>
          <br />
          {visible === true && (
            <Slider max={255} label="Redness" onValueChange={handleChangeRed} />
          )}
        </div>
        <h2>Tent</h2>
        <input type="number" min="1" max="5" onChange={handleChangeRect} />
        <h2>Extra</h2>
        <button onClick={() => setColor(night)}>night</button>
        <button onClick={() => setColor(day)}>day</button>

        <ColorPicker onColorChange={handleSetHaircolor} />
      </div>
      <div className="canvas" style={color}>
        <Drawing
          radius={style.radius}
          strokeWidth={number}
          red={style.red}
          width={rect.width}
          opacity={opacity}
          haircolor={haircolor}
          eyecolor={eyecolor}
        />
      </div>
    </div>
  );
}

export default App;
