/**
 * <LandingView />
 */

import React, { Component } from 'react';

import View from 'containers/View';
import styles from './landing.css';

class LandingView extends Component {
  render() {
    return (
      <View className={styles.root}>
        Landing View
      </View>
    );
  }
}

export default LandingView;
