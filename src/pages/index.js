import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <h1>Team builder for hackathons</h1>
    <p>Here you can browse and create teams for your hackathon event.</p>
    <div data-netlify-identity-menu></div>
    <Link to="/page2/">Go to user page</Link>
  </Layout>
)

export default IndexPage
