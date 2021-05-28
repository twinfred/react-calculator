function MathSymbolButton({ handleClick, symbol }) {
  return (
    <button
      className={`math-symbol-button`}
      onClick={() => handleClick(symbol)}
    >
      {symbol}
    </button>
  )
}

export default MathSymbolButton;