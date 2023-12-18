import { useState } from "react";
import styles from "./Calculator.module.scss";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("");

  const handleInput = (value: string) => {
    setDisplayValue(displayValue + value);
  };

  const calculateResult = () => {
    try {
      const result = eval(displayValue);
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue("Error");
    }
  };

  const clearDisplay = () => {
    setDisplayValue("");
  };

  return (
    <div className={styles.calculator}>
      <div className={styles.display}>
        <div>
          <h3>{displayValue}</h3>
          <h2>{displayValue}</h2>
        </div>
      </div>
      <div className={styles.buttons}>
        <button onClick={() => clearDisplay()}>C</button>
        <button onClick={() => handleInput("/")}>/</button>
        <button onClick={() => handleInput("X")}>X</button>
        <button onClick={() => clearDisplay()}>ce</button>
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
        <button className={styles.result} onClick={calculateResult}>
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
