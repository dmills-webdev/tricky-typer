import React,  { useState, useEffect } from "react"
import TypingTestComponent from "./TypingTestComponent" //Presentational component
import testList from "./testlist" // Import randomised test list from a larger word list

const TypingTestContainer = () => {

// Hiscores
  let hiscores = []

// Initialise wordlist and scoring
  let [words, getNewWords] = useState(testList())
  let [attempts, adjustWordCount] = useState(0)
  let [points, adjustPoints] = useState(0)
  // TODO: add character tracking logic
  //let [characters, charactersRight] = useState(0)

// Initialise test timing variables
  let [isTestRunning, toggleTestRunning] = useState(false)
  let [isTestComplete, toggleTestComplete] = useState(true)
  let [countdown, setCountdown] = useState(0)
  let [duration, setDuration] = useState(60)

// Typing goal word and attempt
  const [typedWord, updateTypedWord] = useState("")
  let [wordToType, nextWord] = useState("")

// Check entered word for correctness if the last character entered was a space/whitespace
  const checkWord = (word) => {
    if (isTestRunning === false && isTestComplete === true) {
      nextWord(words[attempts])
      runTest()
    }
    //While a test is running, check the user has typed at least one character,
    //then if the word matches award a point and move onto the next word
    if (isTestRunning) {
      if ( word.charAt(word.length - 1 ) === " " ) {
        if ( word.toLowerCase() === wordToType + " " ) {
          adjustPoints(points += 1)
        }
        adjustWordCount(attempts += 1)
        nextWord(words[attempts])
        updateTypedWord("")
      }
    }
  }

// Start timing and scoring system
  const count = () => {
    setCountdown(countdown => countdown - 1)
  }

  const clearTimer = () => {
    clearInterval(window.cdc)
  }

  const runTest = () => {
    toggleTestRunning(true)
    toggleTestComplete(false)
    window.cdc = setInterval( () => { count() }, 1000) // Set reference
    setTimeout(() => {
      toggleTestRunning(false)
      clearTimer()
    }, duration*1000)
  }

// Reset test early/midway through
  const resetTest = () => {
    toggleTestRunning(false)
    toggleTestComplete(true)

    setCountdown(duration)
    clearTimer()
    adjustPoints(0)
    adjustWordCount(0)
    updateTypedWord("")

    getNewWords(testList())
  }
  useEffect(() => { // Reset on app loading
    resetTest()
  },[])

// Calculate and return accuracy as long as it can be calculated
  const getAccuracy = () => {
    let accuracy = ((points/attempts)*100).toFixed(1)
    if (isNaN(accuracy)) {
      return 0
    } else {
      return accuracy
    }
  }

// Render
    return(
      <TypingTestComponent
        //Scoring props
        words={words}
        points={points}
        attempts={attempts}
        accuracy={getAccuracy()}
        wpm={ (points*(60/(61-countdown))).toFixed(1) }
        //Operational props
        countdown={countdown}
        typedWord={typedWord}
        updateTypedWord={updateTypedWord}
        checkWord={checkWord}
        resetTest={resetTest}
        />
    )
}

export default TypingTestContainer
