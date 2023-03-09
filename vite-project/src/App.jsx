import { useState } from "react";
import "./App.css";
import Slider from "./components/Slider";
import Drawing from "./components/Drawing";

let x = Math.floor(Math.random() * 1);

const red = { backgroundColor: "red" };
const blue = { backgroundColor: "blue" };

function App() {
  const [radius, setRadius] = useState(10);
  const [color, setColor] = useState(red);
  return (
    <div style={color} className="App">
      <Slider
        max={10}
        label="Radius"
        value={radius}
        onValueChange={(v) => setRadius(v)}
      />
      <Drawing radius={radius} />
      <button onClick={() => setColor(blue)}>blue</button>
      <button onClick={() => setColor(red)}>red</button>
    </div>
  );
}

export default App;
