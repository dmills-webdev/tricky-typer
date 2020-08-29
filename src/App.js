import React, { useState, useEffect } from "react"
import { TypingTestContainer } from "./TypingTestContainer"
import LeaderboardContainer from "./LeaderboardContainer"
import "./app.scss"


function App() {

  let localStorageHiscores = JSON.parse(window.localStorage.getItem("trickyTyperHiscores"))
  let initialHiscores = [
    {score:0},
    {score:0},
    {score:0},
    {score:0},
    {score:0},
    {score:0},
    {score:0},
    {score:0},
    {score:0},
    {score:0}
  ]
  if (localStorageHiscores) {
    initialHiscores = localStorageHiscores
  }
  const [hiscores, updateHiscores] = useState(initialHiscores)
  useEffect(() => {
    window.localStorage.setItem("trickyTyperHiscores", JSON.stringify(hiscores))
  },[hiscores])

    return (
      <div className={"page-container"}>
        <h1>TrickyTyper</h1>
        <TypingTestContainer
          hiscores={hiscores}
          updateHiscores={updateHiscores}/>
        <LeaderboardContainer
          hiscores={hiscores}/>
      </div>
    )
}

export default App
