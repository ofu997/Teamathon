import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const TeamPage = () => (
  <Layout>
    <h1>Hi from team page</h1>
    <p>here should be a list!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default TeamPage