import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';

import App from './js/containers/App';

import './assets/css/styles.scss';

const render = (env = 'production') => {
  ReactDOM.render(<App {...{ env }}/>, document.getElementById('app'));
};

if (process.env.NODE_ENV === 'production') {
  render();
} else {
  if (module.hot) {
    module.hot.accept('./js/containers/App', render);
  }
  render('development');
}
