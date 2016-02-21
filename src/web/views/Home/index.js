/**
 * <HomeView />
 */

import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './home.css';

@CSSModules(styles)
class HomeView extends Component {
  render() {
    return (
      <div styleName={styles.root}>HomeView</div>
    );
  }
}

export default HomeView;
