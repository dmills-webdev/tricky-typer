import React, { useState } from "react"
import { TypingTestContainer } from "./TypingTestContainer"
import LeaderboardContainer from "./LeaderboardContainer"
import "./app.scss"


function App() {
  const [hiscores, updateHiscores] = useState([
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
  ])
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
