import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const TeamPage = () => (
  <Layout>
    <h1> This is the teams page </h1>
    <p> Here we display a list of teams sorted by user's profile match. </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default TeamPage