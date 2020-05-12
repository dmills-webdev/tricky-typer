import React,  { useState, useEffect } from "react"
import splitWords from "./wordlist"

const App = () => {
// Initialise wordlist and session score
  const [words] = useState(splitWords)
  let [points, isCorrect] = useState(0)
  let [isTestRunning, toggleTestRunning] = useState(false)

// Typing goal word and attempt
  const [typedWord, updateTypedWord] = useState("")
  let [wordToType, nextWord] = useState("")


// Check entered word for correctness if the last character entered was a space/whitespace
  const checkWord = (word) => {
    if (isTestRunning) {
      if ( word.charAt(word.length - 1 ) === " " ) {
        if ( word === wordToType + " " ) {
          isCorrect(points += 1)
        }
        updateTypedWord("")
        getTestWord()
      }
    }
  }

// Start timing and scoring system
  const startTest = (duration) => {
    setTimeout(() => {
      toggleTestRunning(false)
    }, duration*1000)
  }


// Get new test words
  const getTestWord = () => {
    let i = Math.floor(Math.random()*words.length)
    nextWord(wordToType = words[i])
  }

// componentDidMount -- Display first word to type
  useEffect(() => {
    getTestWord()
    console.log(isTestRunning)
  }, [])

// Output
  return (
    <div>
      <h1>{wordToType}</h1>

      <input
        value={typedWord}
        onChange={(event) => {
          updateTypedWord(event.target.value)
          checkWord(event.target.value)}}
      />

      <button
        onClick={() => {
          startTest(10)
          toggleTestRunning(true)}}>
        Start test
      </button>

      <h1>{points}</h1>
    </div>
  )
}

export default App
