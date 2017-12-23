import React from 'react';

import { sampleAction } from '../actions/AppActions';

class Body extends React.PureComponent {
  componentDidMount() {
    console.debug('Body component just got mounted');
  }

  onClick() {
    sampleAction();
  }

  render() {
    return (
      <div>
        Inside Body Component
        <br />
        <input type="button" value="Click Here" onClick={this.onClick} />
      </div>
    );
  }
}


export default Body;
