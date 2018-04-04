import React from 'react'
import Link from 'gatsby-link'
import { Container, Tabs, TabList, Tab, TabLink, Navbar, NavbarBrand, NavbarMenu, NavbarEnd, NavbarItem, NavbarBurger, Icon } from 'bloomer'

const brand = require('../../assets/logo.jpg');

const AppHeader = () => (
  <Navbar>
    <Container>
      <NavbarBrand>
        <NavbarItem>
          <img src={brand} style={{ marginRight: 5 }} /> <Link to="/">Sykomaniac</Link>
        </NavbarItem>
        <NavbarBurger />
      </NavbarBrand>
      <NavbarMenu>
        <NavbarEnd>
          <NavbarItem isHidden='touch'>
            <Link to="/page-2/">My CV</Link>
          </NavbarItem>
          <NavbarItem href="https://github.com/Sykomaniac" target="_blank" isHidden='touch'>
            <Icon className='fa fa-github' />
          </NavbarItem>
          <NavbarItem href="https://plus.google.com/+AshleySykes" target="_blank" isHidden='touch'>
            <Icon className='fa fa-google-plus' style={{ color: '#d34836' }} />
          </NavbarItem>
          <NavbarItem href="https://twitter.com/ashsykes15" target="_blank" isHidden='touch'>
            <Icon className='fa fa-twitter' style={{ color: '#55acee' }} />
          </NavbarItem>
        </NavbarEnd>
      </NavbarMenu>
    </Container>
  </Navbar>
)

export default AppHeader
