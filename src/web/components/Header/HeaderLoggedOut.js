/**
 * <HeaderLoggedOut />
 */

import React, { Component } from 'react';

import styles from './header.css';

class HeaderLoggedOut extends Component {
  render() {
    return (
      <header className={styles.root}>Logged Out</header>
    );
  }
}

export default HeaderLoggedOut;
