import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
// new import
import {Button, Container, Row, Col, } from 'reactstrap';
const UserPage = () => (
  <Layout>
    <h1>Hi from user profile page</h1>
    <p>here should be a form!</p>

    <img className="img-responsive" src="../images/LOGO.png" alt="logo"/>
    <Container>
      <Row>
        <Col md='3'>
          // user photo, social media links, manage events here
        </Col>
        <Col md='8'>
          // user description input, skill tags here
        </Col>
      </Row>
    </Container>

    <Link to="/page3/">Show me the teams</Link><br/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default UserPage
