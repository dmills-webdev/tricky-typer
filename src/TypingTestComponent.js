import React from "react"

function TypingTestComponent({ words, points, attempts, accuracy, wpm, countdown, typedWord, updateTypedWord, checkWord, resetTest }) {

  function handleChange(event) {
    let value = event.target.value
    updateTypedWord(value)
    checkWord(value)
  }

  return (
    <div className="game-container">
      <div className="upcoming-words">
        <p className="word-to-type">{words[attempts]}</p>
        <p className="upcoming-word-1">{words[attempts + 1]}</p>
        <p className="upcoming-word-2">{words[attempts + 2]}</p>
        <p className="upcoming-word-3">{words[attempts + 3]}</p>
        <p className="upcoming-word-4">{words[attempts + 4]}</p>
      </div>
      <input
        value={typedWord}
        onChange={handleChange}
      />
      <div className="controls-container">
        <div className="metrics-container">
          <span><p>{countdown}s</p><p className="unit-text">Time remaining</p></span>
          <span><p>{wpm}</p><p className="unit-text">wpm</p></span>
          <span><p>{points} / {attempts}</p><p className="unit-text">Correct/Attempts</p></span>  {/* TODO: add scaling at end of each test*/}
          <span><p>{accuracy}</p><p className="unit-text">%</p></span>
        </div>
        <button
          onClick={resetTest}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default TypingTestComponent
