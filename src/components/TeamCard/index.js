import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class TeamCard extends Component {
  render() {
    const {teamData} = this.props
    const {name, id, imageUrl} = teamData

    return (
      <Link to={`/team-matches/${id}`} className="link-item">
        <li className="team-card">
          <img src={imageUrl} alt={`${name}`} className="team-card-image" />
          <p className="team-card-name">{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
