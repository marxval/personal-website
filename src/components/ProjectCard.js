import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import me from "../me.png"

import {
  faEllipsisV,
  faTimes,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons"
import { faGithub, faReact, faCss3 } from "@fortawesome/free-brands-svg-icons"

export default function ProjectCard({
  project,
  id,
  showInfo,
  hideInfo,
  description,
}) {
  const handleAddInfo = e => {
    showInfo(id)
  }
  const handleClose = e => {
    hideInfo(id)
  }
  return (
    <div>
      <div>
        <div className="card">
          <div>
            <img src={me} alt="Martin Valdivia" />
          </div>
          <div className="card-content">
            <h3>Similar songs</h3>
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              color="lightgrey"
              style={{ fontSize: "24px" }}
              className="icon"
            />
            <FontAwesomeIcon
              icon={faGithub}
              color="lightgrey"
              style={{ fontSize: "24px" }}
              className="icon"
            />
            <div className="borderIcon" onClick={handleAddInfo} id={id}>
              <FontAwesomeIcon
                className="logo-i"
                icon={faEllipsisV}
                style={{ fontSize: "22px" }}
                color="whitesmoke"
              />
            </div>
          </div>
          <div
            class={`card-reveal ${description && "card-reveal-all"}`}
            id={id}
          >
            <div className="close">
              <FontAwesomeIcon
                icon={faTimes}
                color="white"
                onClick={handleClose}
                size={"1x"}
                style={{ fontSize: "20px" }}
              />
            </div>
            <p className="description">
              Web app that make use of the Spotify developer API that will shock
              you with similar songs that you might not knew.
            </p>
            <div className="skills">
              <ul>
                <span>Tech Stack</span>
                <li>React.js</li>
                <li>CSS3</li>
              </ul>
              <ul>
                <span>Skills</span>
                <li> Rest - API </li>
              </ul>
              <ul>
                <span>Tools</span>
                <li>Styled components</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="logos-container">
          <div className="logos">
            <FontAwesomeIcon icon={faReact} color="#00ddff" size={"3x"} />
            <FontAwesomeIcon icon={faCss3} color="lightblue" size={"3x"} />
          </div>
        </div>
      </div>
    </div>
  )
}
