import React, { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import Card from "../components/ProjectCard"
import me from "../me.png"
import "../index.css"
import "../styles/footer.css"
import "../styles/NavbarLogo.css"
import "../styles/projects.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"
export default function Home({ projects = [{ id: 0 }, { id: 1 }] }) {
  const [mobile, setMobile] = useState(false)
  const [description, setDescription] = useState(
    Array.from(Array(projects.length), _ => false)
  )

  const showInfo = id => {
    setDescription(des => {
      let array = [...des]
      array[id] = true
      return array
    })
  }
  const hideInfo = id => {
    setDescription(des => {
      let array = [...des]
      array[id] = false
      return array
    })
  }

  useEffect(() => {
    setMobile(window.innerWidth <= 768)
  }, [])

  return (
    <div>
      <Navbar mobile={mobile} />

      <div className="page">
        <section id="home">
          <div>
            {!mobile && (
              <img src={me} alt="Martin Valdivia" className="self-portrait" />
            )}
          </div>
          <div className="info">
            <p>
              Hi everyone my name is <b>Martin Valdivia</b> and I'm a fresh
              computer engineer graduate. During my academic life I had been
              creating lots of projects with html, css and javascript. I have
              also learn and implemented frameworks like <b>React</b> and{" "}
              <b>Express</b> (Node.js) in my most recent projects where I had
              been using both SQL and NO-SQL databases.
            </p>
          </div>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="cards">
            {projects.map((pj, ix) => (
              <Card
                project={pj}
                id={ix}
                showInfo={showInfo}
                hideInfo={hideInfo}
                description={description[ix]}
              />
            ))}
          </div>
        </section>

        <footer className="footer">
          <div id="social-container">
            <ul>
              <li>
                <div>
                  <FontAwesomeIcon icon={faGithub} size={"1x"} />
                </div>
              </li>
              <li>
                <div>
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </div>
              </li>
              <li>
                <div>
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  )
}
