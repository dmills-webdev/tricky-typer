import React,  { useState, useEffect } from "react"
import testList from "./testlist"
import "./app.css"

const App = () => {

// Initialise wordlist and session score
  let [words, getNewWords] = useState(testList())
  let [attempts, adjustWordCount] = useState(0)
  let [points, adjustPoints] = useState(0)
  let {characters, charactersRight} = useState()

  let [isTestRunning, toggleTestRunning] = useState(false)
  let [isTestComplete, toggleTestComplete] = useState(true)

// Typing goal word and attempt
  const [typedWord, updateTypedWord] = useState("")
  let [wordToType, nextWord] = useState(words[0])


// Check entered word for correctness if the last character entered was a space/whitespace
  const checkWord = (word) => {

    if (isTestRunning === false && isTestComplete === true) {
      runTest(10)
    }

    if (isTestRunning) {
      if ( word.charAt(word.length - 1 ) === " " ) {
        if ( word === wordToType + " " ) {
          adjustPoints(points += 1)
        }
        adjustWordCount(attempts += 1)
        nextWord(words[attempts])
        updateTypedWord("")
      }
    }
  }

// Start timing and scoring system
  const runTest = (duration) => {
    toggleTestRunning(true)
    toggleTestComplete(false)
    setInterval((countdown) => {
      console.log(countdown)

    })
    setTimeout(() => {
      toggleTestRunning(false)
    }, duration*1000)
  }

  const resetTest = () => {
    toggleTestComplete(true)
    adjustPoints(0)
    updateTypedWord("")
    getNewWords(testList())
  }


// Output
  return (
    <div className="container">
      <div className="upcoming-words">
        <h1 className="word-to-type">{words[attempts]}</h1>
        <h1 className="upcoming-word-1">{words[attempts + 1]}</h1>
        <h1 className="upcoming-word-2">{words[attempts + 2]}</h1>
        <h1 className="upcoming-word-3">{words[attempts + 3]}</h1>
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

      <h1>{points} / {attempts}</h1>
    </div>
  )
}

export default App
