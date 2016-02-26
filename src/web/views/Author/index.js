/**
 * <AuthorView />
 */

import React, { Component, PropTypes } from 'react';

import View from 'containers/View';
import styles from './author.css';

class AuthorView extends Component {
  render() {
    return (
      <View className={styles.root}>
        Author View
      </View>
    );
  }
}

export default AuthorView;
