import React from 'react';
import FullWidthImage from '../components/FullWidthImage';
import MiddleMenu from '../components/MiddleMenu';
import MiddleContainer from '../components/MiddleContainer';

export default class alamoanacenter extends React.Component {

  render() {
    return (
        <div>
          <MiddleMenu/>
          <FullWidthImage/>
          <MiddleContainer/>
        </div>
    );
  }
}
