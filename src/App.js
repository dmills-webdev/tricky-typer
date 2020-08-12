import React from "react"
import TypingTestContainer from "./TypingTestContainer"
import LeaderboardContainer from "./LeaderboardContainer"
import "./app.scss"


function App() {
    return (
      <div className={"page-container"}>
        <h1>TrickyTyper</h1>
        <TypingTestContainer />
        <LeaderboardContainer />
      </div>
    )
}

export default App
