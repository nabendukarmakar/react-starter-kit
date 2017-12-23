import React from 'react';
import PropTypes from 'prop-types';

import { EventTypes } from '../constants/AppConstants';
import Body from '../components/Body';
import AppStore from '../stores/AppStore';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      buttonClicked: false,
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  componentWillMount() {
    AppStore.addChangeListener(EventTypes.SAMPLE_EVENT, this.onButtonClick);
  }

  componentDidMount() {
    console.debug('App component just got mounted');
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(EventTypes.SAMPLE_EVENT, this.onButtonClick);
    console.debug('App component will be unmounted');
  }

  onButtonClick() {
    this.setState({
      buttonClicked: AppStore.isActionPerformed(),
    });
  }

  render() {
    return (
      <div>
        Inside {this.props.env} environment!!!
        <br />
        <Body />
        <br />
        Button Clicked : {this.state.buttonClicked ? 'Yes' : 'No'}
      </div>
    );
  }
}

App.propTypes = {
  env: PropTypes.string,
};

App.defaultProps = {
  env: 'production',
};

export default App;
