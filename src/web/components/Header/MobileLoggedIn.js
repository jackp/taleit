/**
 * <MobileLoggedIn />
 */

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import Icon from 'components/Icon';
import Logo from './Logo';
import styles from './header.css';

class MobileLoggedIn extends Component {
  static propTypes = {
    user: PropTypes.object,
  };

  render() {
    const { user } = this.props;

    return (
      <div className={styles.mobile}>
        <Icon name="bars" />
        <Logo />
        <Link to="search"><Icon name="search" /></Link>
        <Link to="notifications"><Icon name="flag-o" /></Link>
        <Link to="messages"><Icon name="envelope-o" /></Link>
      </div>
    );
  }
}

export default MobileLoggedIn;
