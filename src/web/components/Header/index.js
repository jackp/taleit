/**
 * <Header />
 * - Main application header
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import HeaderLoggedIn from './HeaderLoggedIn';
import HeaderLoggedOut from './HeaderLoggedOut';

@connect(state => ({
  user: state.user,
}))
class Header extends Component {
  static propTypes = {
    user: PropTypes.object,
  };

  render() {
    const { user } = this.props;

    return user ? <HeaderLoggedIn user={user} /> : <HeaderLoggedOut />;
  }
}

export default Header;
