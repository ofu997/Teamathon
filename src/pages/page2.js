import React from 'react'
import { Link } from 'gatsby'
import LOGO from '../images/LOGO.png'

import Layout from '../components/layout'
// new imports
import {Container, Row, Col, } from 'reactstrap';
import Person from '../images/person.png';
import Github from '../images/iconGH.png';
import LinkedIn from '../images/iconLI.png';
import Instagram from '../images/iconIG.png';
import Twitter from '../images/iconTW.png';
// constants of style
const columnStyle={margin: '20px', padding: '40px', backgroundColor: '#f5f5f5', border: '1px black'};
const iconStyle={maxWidth:'35px', padding: '5px'};
const skillWords={fontFamily: 'Courier', size: '8px', fontWeight: '600', color: 'navy', backgroundColor: '#99ff99', paddingLeft: '4px', paddingRight: '4px', margin: '10px', textAlign: 'center'};
const UserPage = () => (
  <Layout>

    {/* <strike>
    <h1>Hi from user profile page</h1>
    <p>here should be a form!</p>
    </strike> */}

    <img className="" src={LOGO} height='150px' alt="logo"/>
    <Container>
      <Row>
        <Col lg='4' md='3'>
          <div style={columnStyle}>
          {/* <p>user photo, social media links, manage events here</p>  */}
          <img src={Person} height='150px' borderRadius='55px' margin='block' alt='user photo'/>
          <img src = {Github} style={iconStyle}/>
          <img src = {LinkedIn} style={iconStyle}/>
          <img src = {Instagram} style={iconStyle}/>
          <img src = {Twitter} style={iconStyle}/>
          </div>
        </Col>
        <Col lg='8' md='8'>
          <div style={columnStyle}>
          {/* <p>user description input, skill tags here</p>*/}
          <p style={{border: 'black'}}>A frequent competitor in the tri-county area, Bingo Bronson is in it to win it! </p>

          {/* <p style={skillWords}>SASS</p><p style={skillWords}>Perl</p><p style={skillWords}>Kubernetes</p> */}
          </div>

          <div style={columnStyle} marginTop='20px'>
          <Row>
            <Col style={skillWords} lg='2' md='2'>SASS</Col><Col style={skillWords}lg='2' md='2'>Perl</Col><Col style={skillWords}lg='2' md='2'>Kubernetes</Col>
          </Row>
          </div>
        </Col>
      </Row>
    </Container>

    <Link to="/page3/">Show me the teams</Link><br/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default UserPage
