import React from 'react';
import { Container, Grid, Image, Header } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (

        <Grid centered container>
          <Grid.Row><Grid.Column width={6}>
            <Image src='https://www.alamoanacenter.com/content/ggp-malls/ala-moana-center/en/_jcr_content/par/row_927505531/row-par/image_content_box_389711649/image.img.jpg/1510614358550.jpg' />
          </Grid.Column>
            <Grid.Column width={9}>
              <Container text><Header as='h1'>Lanai @ Ala Moana Center</Header>
                <p>Lanai @ Ala Moana Center is a spectacular new dining concept that features specialty food vendors. With a seating capacity of up to 450, customers have the option to dine al fresco beneath elegant festival lighting or inside a chic dining hall.</p>
                <a href="">Learn more about Lanai @ Ala Moana Center</a></Container>
            </Grid.Column></Grid.Row>

          <Grid.Row><Grid.Column width={6}>
            <Image src='https://www.alamoanacenter.com/content/ggp-malls/ala-moana-center/en/_jcr_content/par/row_927505531/row-par/image_content_box_688256991/image.img.jpg/1509748834725.jpg' />
          </Grid.Column>
            <Grid.Column width={9}>
              <Container text><Header as='h1'>Hula with Aloha</Header>
                <p>Discover an authentic Hawaiian Cultural experience where hula enthusiasts can learn from award-winning kumu hula. Offering beginning, intermediate and advanced classes. Plus, enjoy other unique cultural activities like lei making and Hawaiian storytelling. Every Monday - Saturday, from 9am-3pm. Classes are by reservation only. For more information, or to book a class, please visit hulawithaloha.com or go to Hula with Aloha on Level 3, Ewa Wing next to The Lego Store.</p>
                <a href="">Learn About Hula Lessons</a></Container>
            </Grid.Column></Grid.Row>

          <Grid.Row><Grid.Column width={6}>
            <Image src='https://www.alamoanacenter.com/content/ggp-malls/ala-moana-center/en/_jcr_content/par/row_927505531/row-par/image_content_box_632587729/image.img.jpg/1514935396601.jpg' />
          </Grid.Column>
            <Grid.Column width={9}>
              <Container text><Header as='h1'>Live Hawaiian Music Daily</Header>
                <p>Enjoy free Hawaiian Music every day, 5–6pm, while you shop. Come hear songs that reflect the beautiful traditions and culture of our islands.</p></Container>
            </Grid.Column></Grid.Row>
        </Grid>


    )
  }
}

