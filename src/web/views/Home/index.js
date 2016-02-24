/**
 * <HomeView />
 */

import React, { Component, PropTypes } from 'react';

import View from 'containers/View';
import styles from './home.css';

class HomeView extends Component {
  static propTypes = {
    user: PropTypes.object,
  };

  render() {
    return (
      <View className={styles.root}>
        Home View
      </View>
    );
  }
}

export default HomeView;
