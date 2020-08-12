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
        <p>{points} / {attempts}</p>  {/* TODO: add scaling at end of each test*/}
        <p>{countdown}s</p>
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
