import React from 'react';
import { Container, Menu, Icon, Image } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (

        <Menu borderless className="middlemenu">
          <Container>
            <Menu.Item><Image src={"https://assets.digitalservices.ggp.com/content/dam/ggp-digital-assets/Images/Mall-Images/Mall-Logos/AMC_WhitePlumeria-Black.svg/jcr:content/renditions/original.svg"} size={"small"} /></Menu.Item>
            <Menu.Item fitted position="right">STORES & MAP</Menu.Item>
            <Menu.Item>SHOPPING</Menu.Item>
            <Menu.Item>DINING</Menu.Item>
            <Menu.Item>EVENTS</Menu.Item>
            <Menu.Item>VISIT</Menu.Item>
            <Menu.Item>PARKING</Menu.Item>
            <Menu.Item ><Icon name="search" /></Menu.Item>
          </Container>
        </Menu>
    )
  }
}

