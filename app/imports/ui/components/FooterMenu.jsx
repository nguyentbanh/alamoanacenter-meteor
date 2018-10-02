import React from 'react';
import { Menu, Icon, Grid, Segment } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (

        <Segment inverted>
          <Grid centered>
            <Grid.Row>
              <Grid.Column width={2}>
                <Menu.Item>Contact Us</Menu.Item>
              </Grid.Column>
              <Grid.Column width={2}>
                <Menu.Item>Press Room</Menu.Item>
              </Grid.Column>
              <Grid.Column width={2}>
                <Menu.Item>Jobs</Menu.Item>
              </Grid.Column>
              <Grid.Column width={2}>
                <Menu.Item>Gift Cards</Menu.Item>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <Menu.Item fitted><Icon name="facebook f" /></Menu.Item>
              </Grid.Column>
              <Grid.Column>
                <Menu.Item fitted><Icon name="twitter" /></Menu.Item>
              </Grid.Column>
              <Grid.Column>
                <Menu.Item fitted><Icon name="instagram" /></Menu.Item>
              </Grid.Column>
              <Grid.Column>
                <Menu.Item fitted><Icon name="youtube" /></Menu.Item>
              </Grid.Column>
              <Grid.Column width={4}>
                <Menu.Item>1450 Ala Moana Boulevard, Honolulu, HI 96814 </Menu.Item>
              </Grid.Column>
              <Grid.Column width={3}>
                <Menu.Item>+1-808-955-9517</Menu.Item>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={2}>
                <Menu.Item>Code of Conduct</Menu.Item>
              </Grid.Column>
              <Grid.Column width={2}>
                <Menu.Item>Privacy & Term</Menu.Item>
              </Grid.Column>
              <Grid.Column width={5}>
                <Menu.Item>Change Language: English Spanish Japanese</Menu.Item>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <Menu.Item>Leasing</Menu.Item>
              </Grid.Column>
              <Grid.Column>
                <Menu.Item>Advertising</Menu.Item>
              </Grid.Column>
              <Grid.Column>
                <Menu.Item>About Us</Menu.Item>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Menu.Item>©2018 Brookfield Property REIT Inc. All rights reserved.</Menu.Item>
            </Grid.Row>


          </Grid>
        </Segment>
    )
  }
}

