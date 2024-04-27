import './index.css'
import {Component} from 'react'

class MatchCard extends Component {
  render() {
    const {matchData} = this.props
    const {competingTeamLogo, competingTeam, matchStatus, result} = matchData

    return (
      <li className={`match-card ${matchStatus}`}>
        <img
          src={competingTeamLogo}
          className="match-card-logo"
          alt={`competing team ${competingTeam}`}
        />
        <p className="match-card-name">{competingTeam}</p>
        <p className="match-card-result">{result}</p>
        <p className="match-status">{matchStatus}</p>
      </li>
    )
  }
}

export default MatchCard
