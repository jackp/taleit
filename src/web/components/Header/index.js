/**
 * <Header />
 * - Main application header
 */

import React, { Component, PropTypes } from 'react';
import { VelocityTransitionGroup } from 'velocity-react';
import { connect } from 'react-redux';
import MediaQuery from 'react-responsive';

import DesktopLoggedIn from './DesktopLoggedIn';
import DesktopLoggedOut from './DesktopLoggedOut';
import MobileLoggedIn from './MobileLoggedIn';
import MobileLoggedOut from './MobileLoggedOut';
import animations from 'utils/animations';
import styles from './header.css';

const mobileBreakpoint = 968;

@connect(state => ({
  user: state.user,
  show: state.ui.showHeader,
}))
class Header extends Component {
  static propTypes = {
    show: PropTypes.bool,
    user: PropTypes.object,
  };

  render() {
    const { show, user } = this.props;

    return (
      <VelocityTransitionGroup
        enter={animations.slideDown}
        leave={animations.slideUp}
      >
        { show ?
          <header className={styles.root}>
            <MediaQuery minWidth={mobileBreakpoint} values={{ width: mobileBreakpoint }}>
              { user ? <DesktopLoggedIn user={user} /> : <DesktopLoggedOut /> }
            </MediaQuery>
            <MediaQuery maxWidth={mobileBreakpoint - 1}>
              { user ? <MobileLoggedIn user={user} /> : <MobileLoggedOut /> }
            </MediaQuery>
          </header>
          : null
        }
      </VelocityTransitionGroup>
    );
  }
}

export default Header;
