/**
 * <DesktopLoggedIn />
 */

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import Icon from 'components/Icon';
import PrimaryLinks from './PrimaryLinks';
import SecondaryLinks from './SecondaryLinks';
import Logo from './Logo';
import styles from './header.css';

class DesktopLoggedIn extends Component {
  static propTypes = {
    user: PropTypes.object,
  };

  render() {
    const { user } = this.props;

    return (
      <div className={styles.desktop}>
        <Logo />

        <PrimaryLinks />

        <div className={styles.rightMenu}>
          <Link to={user.username} className={styles.dropdownItem}>
            { user.name }
            <Icon name="caret-down" />
          </Link>
          <div className={styles.dropdownMenu}>
            <SecondaryLinks />
          </div>
        </div>
      </div>
    );
  }
}

export default DesktopLoggedIn;
