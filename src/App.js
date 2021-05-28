import { useState, useEffect } from 'react';
import './App.css';
import NumberButton from './components/NumberButton/number-button';
import MathSymbolButton from './components/MathSymbolButton/math-symbol-button';

function App() {
  const calculatorNumbers = ['1','2','3','4','5','6','7','8','9','0'];
  const equations = ['+','-','x','÷','='];

  const [previousValue, setPreviousValue] = useState();
  const [equationToPerform, setEquationToPerform] = useState();
  const [currentValue, setCurrentValue] = useState();
  const [display, setDisplay] = useState();

  useEffect(() => {
    setDisplay(currentValue);
  }, [currentValue])

  const onNumberClick = (number) => {
    if (equationToPerform) {
      setPreviousValue(currentValue);
    }

    setCurrentValue(currentValue ? currentValue + number : number);

    if (equationToPerform) {
      onMathSymbolClick(equationToPerform)
    }
  }

  const onMathSymbolClick = (symbol) => {
    if (symbol === 'equal') {
      if (!currentValue || !equationToPerform || !previousValue) return;

      switch (equationToPerform) {
        case '+':
          setDisplay(parseInt(previousValue) + parseInt(currentValue));
          break;
        case '-':
          setDisplay(parseInt(previousValue) - parseInt(currentValue));
          break;
        case 'x':
          setDisplay(parseInt(previousValue) * parseInt(currentValue));
          break;
        case '÷':
          setDisplay(parseInt(previousValue) / parseInt(currentValue));
          break;
        default:
      }
      setEquationToPerform(null);
    } else {
      setDisplay(`${currentValue} ${symbol}`);
      setEquationToPerform(symbol);
    }
  }

  return (
    <main>
      <h1>Tim's React Calculator</h1>
      <div className="calculator-screen">{display}</div>
      {
        calculatorNumbers.map(number => (
          <NumberButton
            handleClick={onNumberClick}
            number={number}
            key={number}
          />
        ))
      }
      {
        equations.map((symbol, idx) => (
          <MathSymbolButton
            handleClick={onMathSymbolClick}
            symbol={symbol}
            key={idx}
          />
        ))
      }
    </main>
  );
}

export default App;
