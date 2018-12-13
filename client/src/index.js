import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import store from './store';
import AppContainer from './containers/AppContainer';
import styles from './main.css';


render(
  <Provider store={store}>
    <AppContainer id={styles.main}/>
  </Provider>,
  document.getElementById('root')
);
