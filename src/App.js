import { useEffect, useState } from "react";

function App() {
  const [colors, setColors] = useState([]);
  const [color, setColor] = useState("");
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);
  useEffect(() => {
    setColors([generateColor(), generateColor(), generateColor()]);
  }, []);

  useEffect(() => {
    const index = Math.floor(Math.random() * 3);
    setColor(colors[index]);
  }, [colors]);

  const generateColor = () => {
    return (
      "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0")
    );
  };

  const checkAnswer = (e) => {
    if (e.target.innerHTML === color) {
      setMessage("That is correct!");
      setScore((prev) => prev + 1);
    } else {
      setMessage(`That is incorrect, the right answer was ${color}.`);
      setScore(0);
    }

    setColors([generateColor(), generateColor(), generateColor()]);
  };

  return (
    <div>
      <main>
        <h1 className="header">Guess the Color</h1>
        <div className="color" style={{ backgroundColor: color }}></div>

        <div className="options">
          {colors.map((color, index) => {
            return (
              <div key={index} className="option" onClick={checkAnswer}>
                {color}
              </div>
            );
          })}
        </div>
        <p className="message">{message}</p>
        <p className="score">Score: {score}</p>
      </main>
    </div>
  );
}

export default App;
