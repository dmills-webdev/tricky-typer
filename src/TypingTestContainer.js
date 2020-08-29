import React,  { useState, useEffect } from "react"
import TypingTestComponent from "./TypingTestComponent" //Presentational component
import testList from "./testlist" // Import randomised test list from a larger word list

function TypingTestContainer({ hiscores, updateHiscores }) {
// Initialise wordlist and scoring
  let [words, getNewWords] = useState(testList())
  let [attempts, adjustAttempts] = useState(0)
  let [points, adjustPoints] = useState(0)

  // TODO: add character tracking logic
  //let [characters, charactersRight] = useState(0)

// Initialise test timing variables
  let [isTestRunning, toggleTestRunning] = useState(false)
  let [isTestComplete, toggleTestComplete] = useState(true)
  let [countdown, setCountdown] = useState(0)
  let [duration, setDuration] = useState(60)

// Typing goal word and attempt
  let [typedWord, updateTypedWord] = useState("")

// Check entered word for correctness if the last character entered was a space/whitespace
  const checkWord = (word) => {

    if (isTestRunning && !isTestComplete) {
      if ( word.charAt(word.length - 1) === " " ) {
        let trimmedWord = word.slice(0, word.length - 1)
        if (trimmedWord === words[attempts]) {
          adjustPoints(points += 1)
          window.points = points
        }
        adjustAttempts(attempts += 1)
        updateTypedWord("")
      }
    }
    else if (isTestComplete){
      runTest()
    }
  }

// Start timing and scoring system
  const count = () => {
    setCountdown(countdown -= 1)
  }
// Clears the test timer by reference
  const clearTimer = () => {
    clearInterval(window.cdc)
  }
// Starts and stops test
  const runTest = () => {
    toggleTestRunning(true)
    toggleTestComplete(false)
    window.cdc = setInterval( () => { count() }, 1000) // Set reference
    setTimeout(() => {
      clearTimer()
      toggleTestRunning(false)
      checkHiscores()
    }, duration*1000)

  }

// TODO: Points resetting at end of test?
  const checkHiscores = () => {
    if ( window.points > hiscores[9].score ) {
      let position = 9
      for (let i = 9; i >= 0; i--) {
        if ( window.points > hiscores[i].score ) {
          position = i
        }
      }
      let newHiscores = hiscores
      newHiscores.splice(position,0,{score: window.points})
      console.log(newHiscores)
      let hiscoresToReturn = newHiscores.slice(0,10)
      console.log(hiscoresToReturn)
      updateHiscores(hiscoresToReturn)
    }
  }

// Reset test early/midway through
  const resetTest = () => {
    adjustAttempts(0)
    getNewWords(testList())
    setCountdown(duration)
    clearTimer()
    adjustPoints(0)
    updateTypedWord("")
    toggleTestComplete(true)
  }
  useEffect(() => { // Reset on app loading
    getNewWords(testList())
    setCountdown(duration)
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

export { TypingTestContainer }
