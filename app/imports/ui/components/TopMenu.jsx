import React from 'react';
import { Container, Menu, Icon, Dropdown } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless inverted className="topmenu">
          <Container>
            <Menu.Item fitted><Icon name="globe" /></Menu.Item>
            <Dropdown item text="English" icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>English</Dropdown.Item>
                <Dropdown.Item>Spanish</Dropdown.Item>
                <Dropdown.Item>Japanese</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item fitted position="right">Contact Us</Menu.Item>
            <Menu.Item>Today's Hours: Closed</Menu.Item>
          </Container>
        </Menu>
    )
  }
}

