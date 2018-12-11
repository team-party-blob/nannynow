import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import store from './store';
import App from './components/app/App';
import styles from './main.css';


render(
  <Provider store={store}>
    <App id={styles.main}/>
  </Provider>,
  document.getElementById('root')
);
