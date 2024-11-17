import { useEffect, useState } from "react";
import "./counter.css";

export function Counter() {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleRestar = () => {
    setIsRunning(false);
    setCounter(0);
  };

  return (
    <div className="container">
      <p className="seconds">{counter}</p>
        <h1>Contador</h1>
        <div className="buttons">
          <button
            className="botao"
            onClick={isRunning ? handleStop : handleStart}>
            {isRunning ? "Parar" : "Iniciar "}
          </button>
          <button className="botao" onClick={handleRestar}>
            Reiniciar
          </button>
        </div>
    </div>
  );
}
