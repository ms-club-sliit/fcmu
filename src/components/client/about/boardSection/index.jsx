import { useState } from "react"
import boardMembers from "./boardMembers.json"
import pattonBlue from "../../../../assets/images/AboutPage/patton.png"
import "./styles.css"

function BoardSection() {
  // By default use 2022 board. Json index [1]
  const [members, setMembers] = useState(boardMembers[1].members)

  const ArrangeBoard = (event) => {
    const year = event.target.value || 2023

    for (const board of boardMembers) {
      if (board.year === year) {
        setMembers(board.members)
      }
    }
  }

  return (
    <div id="board-section" className="container">
      <img className="board-patton-blue" src={pattonBlue} alt="" />
      <div className="row">
        <div className="col">
          <div className="d-block my-5">
            <h1 className="board-heading">Board of officials</h1>
          </div>

          <div className="d-flex justify-content-center my-5">
            <select name="" id="board-year" onChange={ArrangeBoard}>
              <option value="2023" selected>2023</option>
              <option value="2022" >
                2022
              </option>
            </select>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="board-cards">
          {members.length <= 0 ? <h2>No member details found</h2> : ''}
          {members.map((member) => (
            <div className="col-12 col-md-6 col-lg-4">
              <BoardCard
                src={member.imgSrc}
                name={member.name}
                position={member.position}
                socials={member.socials}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function BoardCard(props) {
  const { src, name, position, socials } = props
  return (
    <div className="board-card">
      <img className="board-card-img" src={src} alt="" />
      <p className="board-card-name">{name}</p>
      <p className="board-card-position">{position}</p>
      <div className="socials-wrapper">
        {socials.facebook ? <SocialFacebook profileLink="https://google.com" /> : ''}
        {socials.instagram ? <SocialInstagram profileLink="https://google.com" /> : ''}
        {socials.linkedin ? <SocialLinkedin profileLink="https://google.com" /> : ''}
        {socials.twitter ? <SocialTwitter profileLink="https://google.com" /> : ''}
      </div>
    </div>
  )
}

// Socials
function SocialFacebook(props) {
  const { profileLink } = props
  return (
    <a href={profileLink} target="_blank" className="social-link" rel="noreferrer">
      <i className="social-icon fa fa-facebook" aria-hidden="true" />
    </a>
  )
}

function SocialInstagram(props) {
  const { profileLink } = props
  return (
    <a href={profileLink} target="_blank" className="social-link" rel="noreferrer">
      <i className="social-icon fa fa-instagram" aria-hidden="true" />
    </a>
  )
}

function SocialLinkedin(props) {
  const { profileLink } = props
  return (
    <a href={profileLink} target="_blank" className="social-link" rel="noreferrer">
      <i className="social-icon fa fa-linkedin" aria-hidden="true" />
    </a>
  )
}

function SocialTwitter(props) {
  const { profileLink } = props
  return (
    <a href={profileLink} target="_blank" className="social-link" rel="noreferrer">
      <i className="social-icon fa fa-twitter" aria-hidden="true" />
    </a>
  )
}

export default BoardSection
