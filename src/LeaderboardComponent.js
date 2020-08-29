import React from "react"

function LeaderboardComponent({ hiscores }) {
  return(
    <div className="leaderboard-container">
      <h2>Leaderboard</h2>
      <div className="leaderboard-grid">
        <div>1. {hiscores[0].score}<span className="unit-text">wpm</span></div>
        <div>2. {hiscores[1].score}<span className="unit-text">wpm</span></div>
        <div>3. {hiscores[2].score}<span className="unit-text">wpm</span></div>
        <div>4. {hiscores[3].score}<span className="unit-text">wpm</span></div>
        <div>5. {hiscores[4].score}<span className="unit-text">wpm</span></div>
        <div>6. {hiscores[5].score}<span className="unit-text">wpm</span></div>
        <div>7. {hiscores[6].score}<span className="unit-text">wpm</span></div>
        <div>8. {hiscores[7].score}<span className="unit-text">wpm</span></div>
        <div>9. {hiscores[8].score}<span className="unit-text">wpm</span></div>
        <div>10. {hiscores[9].score}<span className="unit-text">wpm</span></div>
      </div>
    </div>
  )
}

export default LeaderboardComponent
