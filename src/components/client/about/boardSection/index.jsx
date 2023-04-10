/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-no-useless-fragment */

import { useState } from 'react'
import boardMembers from './boardMembers.json'
import facebook from '../../../../assets/images/AboutPage/facebook.svg'
import instagram from '../../../../assets/images/AboutPage/instagram.svg'
import linkedin from '../../../../assets/images/AboutPage/linkedin.svg'
import twitter from '../../../../assets/images/AboutPage/twitter.svg'
import './styles.css'

const BoardSection = () => {
  const [members, setMembers] = useState(boardMembers[0].members)

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
      <div className="row">
        <div className="col">
          <div className="d-block my-5">
            <h1 className="board-heading">Board of officials - 2022</h1>
          </div>

          <div className="d-flex justify-content-center my-5">
            <select name="" id="board-year" onChange={ArrangeBoard}>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="board-cards">
          {members.length <= 0 ? <h2>No member details found</h2> : ''}
          {members.map((member) => (
            <>
              <div className="col-12 col-md-6 col-lg-4">
                <BoardCard
                  src={member.imgSrc}
                  name={member.name}
                  position={member.position}
                  socials={member.socials}
                />
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

const BoardCard = (props) => {
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
const SocialFacebook = (props) => {
  const { profileLink } = props
  return (
    <a href={profileLink} target="_blank" className="social-link" rel="noreferrer">
      <img className="social-icon" src={facebook} alt="facebook" />
    </a>
  )
}

const SocialInstagram = (props) => {
  const { profileLink } = props
  return (
    <a href={profileLink} target="_blank" className="social-link" rel="noreferrer">
      <img className="social-icon" src={instagram} alt="instagram" />
    </a>
  )
}

const SocialLinkedin = (props) => {
  const { profileLink } = props
  return (
    <a href={profileLink} target="_blank" className="social-link" rel="noreferrer">
      <img className="social-icon" src={linkedin} alt="linkedin" />
    </a>
  )
}

const SocialTwitter = (props) => {
  const { profileLink } = props
  return (
    <a href={profileLink} target="_blank" className="social-link" rel="noreferrer">
      <img className="social-icon" src={twitter} alt="twitter" />
    </a>
  )
}

export default BoardSection
