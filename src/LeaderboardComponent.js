import React from "react"

function LeaderboardComponent({ hiscores }) {
  return(
    <div className="leaderboard-container">
      <h2>Leaderboard</h2>
      <div className="leaderboard-grid">
        <div>1. {hiscores[0].score}</div>
        <div>2. {hiscores[1].score}</div>
        <div>3. {hiscores[2].score}</div>
        <div>4. {hiscores[3].score}</div>
        <div>5. {hiscores[4].score}</div>
        <div>6. {hiscores[5].score}</div>
        <div>7. {hiscores[6].score}</div>
        <div>8. {hiscores[7].score}</div>
        <div>9. {hiscores[8].score}</div>
        <div>10. {hiscores[9].score}</div>
      </div>
    </div>
  )
}

export default LeaderboardComponent
