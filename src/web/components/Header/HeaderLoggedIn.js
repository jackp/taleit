/**
 * <HeaderLoggedIn />
 */

import React, { Component, PropTypes } from 'react';

import styles from './header.css';

class HeaderLoggedIn extends Component {
  static propTypes = {
    user: PropTypes.object,
  };

  render() {
    const { user } = this.props;

    return (
      <header className={styles.root}>Hi { user.name }</header>
    );
  }
}

export default HeaderLoggedIn;
