import "./index.css";
import Sphere from "./components/Sphere";
import { useState } from "react";
import Color from "./components/Color";

function App() {
  const [condition, SetCondition] = useState(true);
  const [color, SetColor] = useState("blue");

  console.log(condition);
  return (
    <div className="App" onClick={() => SetCondition(!condition)}>
      <div className="sphereContainer">
        <div className="container">
          <Sphere condition={condition} color={color} />
          <Sphere condition={!condition} color={color} />
          <Sphere condition={condition} color={color} />
          <Sphere condition={!condition} color={color} />
          <Sphere condition={condition} color={color} />
        </div>

        <div className="container">
          <Sphere condition={condition} color={color} />
          <Sphere condition={!condition} color={color} />
          <Sphere condition={condition} color={color} />
          <Sphere condition={!condition} color={color} />
          <Sphere condition={condition} color={color} />
        </div>

        <div className="container">
          <Sphere condition={condition} color={color} />
          <Sphere condition={!condition} color={color} />
          <Sphere condition={condition} color={color} />
          <Sphere condition={!condition} color={color} />
          <Sphere condition={condition} color={color} />
        </div>
      </div>
      <footer>
        <Color color="green" setColor={SetColor} />
        <Color color="grey" setColor={SetColor} />
        <Color color="blue" setColor={SetColor} />
        <Color color="red" setColor={SetColor} />
        <Color color="pink" setColor={SetColor} />
      </footer>

      <h1>sphere.</h1>
    </div>
  );
}

export default App;
