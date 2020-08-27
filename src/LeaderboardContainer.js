import React from "react"
import LeaderboardComponent from "./LeaderboardComponent"
import "./TypingTestContainer"

// Todo: pass hiscores back?

function LeaderboardContainer({ hiscores }) {
  return (
    <LeaderboardComponent
      hiscores={hiscores} />
  )
}

export default LeaderboardContainer
