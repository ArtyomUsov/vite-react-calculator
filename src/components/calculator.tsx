import { useEffect, useState } from "react";
import styles from "./Calculator.module.scss";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("");
  const [history, setHistory] = useState("");
  const [result, setResult] = useState("");

  const updateResult = () => {
    try {
      const calculatedResult = eval(history);
      setResult(calculatedResult.toString());
    } catch (error) {
      setResult(result);
    }
  };

  useEffect(() => {
    updateResult();
  }, [history]);

  const handleInput = (value: string) => {
    setHistory(history + value);
    setDisplayValue(displayValue + value);
  };

  const clearLastSign = () => {
    setHistory(history.slice(0, -1));
    setDisplayValue(displayValue.slice(0, -1));
  };

  const clearDisplay = () => {
    setHistory("");
    setDisplayValue("");
    setResult("");
  };

  return (
    <div className={styles.calculator}>
      <div className={styles.display}>
        <div>
          <h3>{history}</h3>
          <h2>{result}</h2>
        </div>
      </div>
      <div className={styles.buttons}>
        <button onClick={() => clearDisplay()}>C</button>
        <button onClick={() => handleInput("/")}>/</button>
        <button onClick={() => handleInput("*")}>X</button>
        <button onClick={() => clearLastSign()}>ce</button>
        <button onClick={() => handleInput("7")}>7</button>
        <button onClick={() => handleInput("8")}>8</button>
        <button onClick={() => handleInput("9")}>9</button>
        <button onClick={() => handleInput("-")}>-</button>
        <button onClick={() => handleInput("4")}>4</button>
        <button onClick={() => handleInput("5")}>5</button>
        <button onClick={() => handleInput("6")}>6</button>
        <button onClick={() => handleInput("+")}>+</button>
        <button onClick={() => handleInput("1")}>1</button>
        <button onClick={() => handleInput("2")}>2</button>
        <button onClick={() => handleInput("3")}>3</button>
        <button className={styles.result} onClick={updateResult}>
          =
        </button>
        <button onClick={() => handleInput("%")}>%</button>
        <button onClick={() => handleInput("0")}>0</button>
        <button onClick={() => handleInput(".")}>.</button>
      </div>
    </div>
  );
};

export default Calculator;
