import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const UserPage = () => (
  <Layout>
    <h1>Hi from user profile page</h1>
    <p>here should be a form!</p>
    <Link to="/page3/">Show me the teams</Link><br/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default UserPage