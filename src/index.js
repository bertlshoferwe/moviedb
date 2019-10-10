import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
 

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(NextApp);
  });
}

serviceWorker.unregister();