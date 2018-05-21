import React from 'react'
import Link from 'gatsby-link'
import { Container, Tabs, TabList, Tab, TabLink, Navbar, NavbarBrand, NavbarMenu, NavbarEnd, NavbarItem, NavbarBurger, Icon, NavbarStart } from 'bloomer'

const brand = require('../../assets/logo.jpg');

export default class AppHeader extends React.Component {
  state = { isActive: false };

  onClickNav = () => {
    this.setState((state) => ({ isActive: !state.isActive }));
  }

  render() {
    return (
      <Navbar>
        <Container>
          <NavbarBrand>
            <NavbarItem>
              <img src={brand} style={{ marginRight: 5 }} /> <Link to="/">Sykomaniac</Link>
            </NavbarItem>
            <NavbarItem href="https://github.com/Sykomaniac" target="_blank" isHidden='desktop'>
              <Icon className='fa fa-github' />
            </NavbarItem>
            <NavbarItem href="https://plus.google.com/+AshleySykes" target="_blank" isHidden='desktop'>
              <Icon className='fa fa-google-plus' style={{ color: '#d34836' }} />
            </NavbarItem>
            <NavbarItem href="https://twitter.com/ashsykes15" target="_blank" isHidden='desktop'>
              <Icon className='fa fa-twitter' style={{ color: '#55acee' }} />
            </NavbarItem>
            <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav} />
          </NavbarBrand>
          <NavbarMenu  isActive={this.state.isActive} onClick={this.onClickNav}>
            <NavbarStart>
              <NavbarItem>
                <Link to="/cv/">CV</Link>
              </NavbarItem>
            </NavbarStart>
            <NavbarEnd>
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
  }
}
