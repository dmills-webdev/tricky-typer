import React,  { useState } from "react"
import TypingTestComponent from "./TypingTestComponent" //Presentational component
import testList from "./testlist" // Import randomised test list from a larger word list

const TypingTestContainer = () => {

// Initialise wordlist and session score
  let [words, getNewWords] = useState(testList())
  let [attempts, adjustWordCount] = useState(0)
  let [points, adjustPoints] = useState(0)

  // TODO: add character tracking logic
  //let [characters, charactersRight] = useState(0)

  let [countdown, setCountdown] = useState(10)
// Initialise test timing variables
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
  var countdownClock

  const count = () => {
    setCountdown(countdown => countdown - 1)
  }

  const clearTimer = () => {
    console.log("Clearing " + countdownClock)
    clearInterval(countdownClock)
  }

  const runTest = (duration) => {
    setCountdown(duration)
    toggleTestRunning(true)
    toggleTestComplete(false)

    countdownClock = setInterval( () => count(), 1000)

    setTimeout( () => {
      clearTimer()
    }, duration*1000)
  }

// Reset test early/midway through
  const resetTest = () => {
    console.log("Resetting " + countdownClock)
    clearTimer()

    toggleTestRunning(false)
    toggleTestComplete(true)
    adjustPoints(0)
    adjustWordCount(0)
    updateTypedWord("")
    getNewWords(testList())
  }





// Render
    return(
      <TypingTestComponent
        words={words}
        points={points}
        countdown={countdown}
        attempts={attempts}
        typedWord={typedWord}
        updateTypedWord={updateTypedWord}
        checkWord={checkWord}
        resetTest={resetTest}
        />
    )
}

export default TypingTestContainer
