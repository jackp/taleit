/**
 * <Logo />
 */

import React, { Component } from 'react';
import { IndexLink } from 'react-router';

import logo from 'images/logo.svg';
import styles from './header.css';

class Logo extends Component {
  render() {
    return (
      <IndexLink to="/" className={styles.logo}>
        <img src={logo} />
      </IndexLink>
    );
  }
}

export default Logo;
