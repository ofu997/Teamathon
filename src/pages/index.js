import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <h1>Build your team with us</h1>
    <p>Welcome to your Teamathon site.</p>
    <div data-netlify-identity-menu></div>
    <p>Now go build some awesome teams.</p>
    <Link to="/page2/">Go to user page</Link>
  </Layout>
)

export default IndexPage
