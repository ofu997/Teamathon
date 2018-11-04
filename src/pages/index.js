import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Build your team with us</h1>
    <p>Welcome to your Teamathon site.</p>
    <p>Now go build some awesome teams.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/userPage/">Go to user page</Link>
  </Layout>
)

export default IndexPage
