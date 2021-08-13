import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import { createCharacter } from "../utils/users"

const SecondPage = () => (
  <Layout>
    <h1>Hi from the character page</h1>
    <p>Welcome to page character</p>
    <div className="TestBTN">
      <button onClick={() => createCharacter({ name: "Molly Speacht" })}>
        Create
      </button>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
