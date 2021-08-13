import React, { useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { getUsers } from "../utils/users"

const IndexPage = () => {
  useEffect(() => {
    getUsers()
  }, [])
  
  return (
    <Layout>
      <div
        className="homeBG"
      >
        <div className="logocenter">
          <div className="withBGC">
            <h1>Welcome Adventurers!</h1>
            <p>Create a character, play a character the option is yours...</p>
          </div>
        </div>
        <div className="logocenter">
          <StaticImage
            src="../images/logo.png"
            width={200}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="ES Logo"
            style={{ marginBottom: `1.45rem` }}
          />
        </div>
        <div className="withBGC">
          <p>"My guards are strong and true, but even the might of the Blades cannot stand against the Power that rises to destroy us. The Prince of Destruction awakes, born anew in blood and fire. These cutthroats are but his mortal pawns.
      Take my Amulet. Give it to Jauffre. I have a secret son, and Jauffre alone knows where to find him.
      Find the last of my blood, and close shut the marble jaws of Oblivion."</p>
          <p>- Emperor Uriel Septim 3E 433</p>
        </div>
        <div className="logocenter">
          <p>
            <Link to="/character/">
              <StaticImage
                src="../images/addplayer.png"
                width={100}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Add Character"
                style={{ margin: `4.45rem` }}
              />
            </Link>
            
            <Link to="/gm/">
              <StaticImage
                src="../images/gm.gif"
                width={100}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Game Master"
                style={{ margin: `4.45rem` }}
              />
            </Link>
            <Link to="/character/">
              <StaticImage
                src="../images/player.jpg"
                width={150}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Character"
                style={{ margin: `4.45rem` }}
              />
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
