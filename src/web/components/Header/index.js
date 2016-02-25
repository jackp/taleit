/**
 * <Header />
 * - Main application header
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MediaQuery from 'react-responsive';

import DesktopLoggedIn from './DesktopLoggedIn';
import DesktopLoggedOut from './DesktopLoggedOut';
import MobileLoggedIn from './MobileLoggedIn';
import MobileLoggedOut from './MobileLoggedOut';
import styles from './header.css';

const mobileBreakpoint = 968;

@connect(state => ({
  user: state.user,
}))
class Header extends Component {
  static propTypes = {
    user: PropTypes.object,
  };

  render() {
    const { user } = this.props;
    return (
      <header className={styles.root}>
        <MediaQuery minWidth={mobileBreakpoint} values={{ width: mobileBreakpoint }}>
          { user ? <DesktopLoggedIn user={user} /> : <DesktopLoggedOut /> }
        </MediaQuery>
        <MediaQuery maxWidth={mobileBreakpoint - 1}>
          { user ? <MobileLoggedIn user={user} /> : <MobileLoggedOut /> }
        </MediaQuery>
      </header>
    );
  }
}

export default Header;
