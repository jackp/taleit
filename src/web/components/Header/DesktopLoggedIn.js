/**
 * <DesktopLoggedIn />
 */

import React, { Component, PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';

import logo from 'images/logo.svg';
import styles from './header.css';

class DesktopLoggedIn extends Component {
  static propTypes = {
    user: PropTypes.object,
  };

  render() {
    const { user } = this.props;

    return (
      <div className={styles.desktop}>
        <IndexLink to="/" className={styles.logo}>
          <img src={logo} />
        </IndexLink>
        <Link to="create" className={styles.primaryLink}>CREATE</Link>
        <Link to="discover" className={styles.primaryLink}>DISCOVER</Link>

        <div className={styles.rightMenu}>
          <Link to={user.username}>{ user.name }</Link>
        </div>
      </div>
    );
  }
}

export default DesktopLoggedIn;
