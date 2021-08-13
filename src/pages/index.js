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
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/character/">Go to character page</Link> <br />
        <Link to="/gm/">Go to gm page</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
