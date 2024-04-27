import {Component} from "react"
import TeamCard from "../TeamCard"
import Loader from "react-loader-spinner"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import "./index.css"

class Home extends Component {
  state={
    teamsData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList=async () => {
    const response=await fetch("https://apis.ccbp.in/ipl")
    const fetchData=await response.json()
    const updatedData=fetchData.teams.map(eachData => ({
      name: eachData.name,
      imageUrl: eachData.team_image_url,
      id: eachData.id, 
    }))
    this.setState({teamsData: updatedData, isLoading: false})
  }

  renderTeamsList=() => {
    const {teamsData}=this.state
    return (
      <ul className="team-list-items">
      {teamsData.map(team => (
        <TeamCard key={team.id} teamData={team} />
      ))}
      </ul>
    )
  }

  renderLoader=() => (
    <div testid="loader" className="loader-container">
    <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading}=this.state
    return (
      <div className="app-container">
      <div className="ipl-container">
      <div className="header-container">
      <img className="ipl-logo"
      src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
      alt="ipl logo" />
      <h1 className="header-heading">IPL Dashboard</h1>
      </div>
      {isLoading ? this.renderLoader() : this.renderTeamsList()}
      </div>
      </div>
    )
  }
}

export default Home