import React from "react"

function TypingTestComponent({ words, points, attempts, wpm, countdown, typedWord, updateTypedWord, checkWord, resetTest }) {
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
        onChange={(event) => {
          updateTypedWord(event.target.value)
          checkWord(event.target.value)}}
      />
      <div className="controls-container">
        <span><p>{points} / {attempts}</p><p className="unit-text">Correct/Attempts</p></span>  {/* TODO: add scaling at end of each test*/}
        <span><p>{countdown}s</p><p className="unit-text">Time remaining</p></span>
        <span><p>{wpm}</p><p className="unit-text">wpm</p></span>
        <button
          onClick={() => {
            resetTest()
            }}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default TypingTestComponent