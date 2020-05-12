import React,  { useState, useEffect } from "react"
import wordlist from "./wordlist"


const App = () => {
// Initialise wordlist and session score
  const [words] = useState(wordlist.words)
  let [points, isCorrect] = useState(0)

// Typing goal word and attempt
  const [typedWord, updateTypedWord] = useState("")
  let [wordToType, nextWord] = useState("")


// Check entered word for correctness if the last character entered was a space/whitespace
  const checkWord = (word) => {
    if ( word.charAt(word.length - 1 ) === " " ) {
      console.log(word)
      if ( word === wordToType + " " ) {
        isCorrect(points += 1)
      }
      updateTypedWord("")
      getTestWord()
    }
  }

// Get new test words
  const getTestWord = () => {
    let i = Math.floor(Math.random()*words.length)
    nextWord(wordToType = words[i])
  }

// componentDidMount -- Display first word to type
  useEffect(() => {
    getTestWord()
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
      <p>{typedWord}</p>
      <h1>{points}</h1>
    </div>
  )
}

export default App
