import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const UserPage = () => (
  <Layout>
    <h1>This is the user profile page</h1>
    <p> It should contain user's skills(as tags), social media links, timezone, etc. </p>
    <p> It also lets user manage teams, events and his/her profile. </p>
    <Link to="/page3/">Show me the teams</Link><br/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default UserPage