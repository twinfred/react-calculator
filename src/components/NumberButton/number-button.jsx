function NumberButton({ handleClick, number }) {
  return (
    <button
      className="number-button"
      onClick={() => handleClick(number)}
    >
      {number}
    </button>
  )
}

export default NumberButton;