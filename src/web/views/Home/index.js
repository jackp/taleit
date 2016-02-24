/**
 * <HomeView />
 */

import React, { Component } from 'react';

import View from 'containers/View';
import styles from './home.css';

class HomeView extends Component {
  render() {
    return (
      <View className={styles.root}>
        Home View
      </View>
    );
  }
}

export default HomeView;
