import { useState } from "react";
import "./App.css";
import Slider from "./components/Slider";
import Drawing from "./components/Drawing";
import ColorPicker from "./components/ColorPicker";
<<<<<<< HEAD

const day = { backgroundColor: "white" };
const night = { backgroundColor: "black" };

function App() {
  const [color, setColor] = useState(day);
  const [visible, setVisible] = useState(false);
  const [number, setNumber] = useState(1.5);
=======
import Time from "./components/Time";

function App() {
  const [color, setColor] = useState("white");
  const [visible, setVisible] = useState(false);
  const [stroke, setStroke] = useState(1.5);
>>>>>>> develop
  const [opacity, setOpacity] = useState(0);
  const [haircolor, setHaircolor] = useState("orange");
  const [eyecolor, setEyecolor] = useState("red");
  const [rect, setRect] = useState({
    width: 20,
  });
<<<<<<< HEAD

  const handleSetHaircolor = (e) => {
    setHaircolor(e);
  };

  const handleSetEyecolor = (e) => {
    setEyecolor(e);
  };
  const [style, setStyle] = useState({
=======
  const [slider, setSlider] = useState({
>>>>>>> develop
    radius: 5,
    red: 255,
  });

<<<<<<< HEAD
=======
  const handleSetHaircolor = (e) => {
    setHaircolor(e);
  };

  const handleSetEyecolor = (e) => {
    setEyecolor(e);
  };

>>>>>>> develop
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
    setSlider({
      ...slider,
      radius: e.target.value,
    });
  };

  const handleChangeRed = (e) => {
    setSlider({
      ...slider,
      red: e.target.value,
    });
  };

  const handleChangeStroke = (e) => {
    setStroke(e.target.value);
  };

  console.log(color);
  return (
    <div className="App">
<<<<<<< HEAD
      <div>
=======
      <div className="App__left">
>>>>>>> develop
        <h1>Customize your Clownwallpaper</h1>

        <div>
          <h2>Eyes</h2>
          <Slider
            min={2}
            max={5}
            label="Pupil Size"
            onValueChange={handleChangeRadius}
          />
<<<<<<< HEAD
=======
          <br />
          <label>Iris Size</label>
>>>>>>> develop
          <input
            label="Iris size"
            type="number"
            min="1"
            step="0.1"
            max="2.5"
<<<<<<< HEAD
            value={number}
            onChange={handleChangeStroke}
          />
=======
            value={stroke}
            onChange={handleChangeStroke}
          />
          <br />
          <label>eyecolor</label>
>>>>>>> develop
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
<<<<<<< HEAD
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
=======
        <div>
          <h2>Tent</h2>
          <label>Tentlines</label>
          <input type="number" min="1" max="5" onChange={handleChangeRect} />
        </div>
        <div>
          <h2>Extra</h2>
          <Time setColor={setColor} time="white" timeText="day" />
          <Time setColor={setColor} time="black" timeText="night" />
          <br />
          <br />
          <label>Hair</label>
          <ColorPicker onColorChange={handleSetHaircolor} />
        </div>
      </div>
      <div className="canvas" style={{ backgroundColor: color.time }}>
        <Drawing
          radius={slider.radius}
          strokeWidth={stroke}
          red={slider.red}
>>>>>>> develop
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
