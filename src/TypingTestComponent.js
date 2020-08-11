import React from "react"

function TypingTestComponent({ words, points, attempts, countdown, typedWord, updateTypedWord, checkWord, resetTest }) {
  return (
    <div className="container">
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

      <button
        onClick={() => {
          resetTest()
          }}>
        Reset
      </button>

      <p>{points} / {attempts}</p>
      <p>{countdown}</p>
    </div>
  )
}

export default TypingTestComponent
