/**
 * <HeaderLoggedIn />
 */

import React, { Component, PropTypes } from 'react';
import { IndexLink } from 'react-router';

import logo from 'images/logo.svg';
import styles from './header.css';

class HeaderLoggedIn extends Component {
  static propTypes = {
    user: PropTypes.object,
  };

  render() {
    const { user } = this.props;

    return (
      <header className={styles.root}>
        <IndexLink to="/" className={styles.logo}>
          <img src={logo} />
        </IndexLink>
      </header>
    );
  }
}

export default HeaderLoggedIn;
