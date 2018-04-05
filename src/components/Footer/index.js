import React from 'react'
import { Footer, Container, Content, Columns, Column, Icon } from 'bloomer'

const gatsby = require('../../assets/gatsby.svg');

const AppFooter = () => (
  <Footer id="footer">
    <Container>
      <Content>
        <Columns>
          <Column isFull>
            <p>
              Made with<Icon hasTextColor="danger" className="fa fa-heart" />using
            </p>
            <img src={gatsby} style={{ width: '200px', height: '50px' }} />
          </Column>
        </Columns>
      </Content>
    </Container>
  </Footer>
)

export default AppFooter
