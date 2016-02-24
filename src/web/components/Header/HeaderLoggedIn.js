/**
 * <HeaderLoggedIn />
 */

import React, { Component, PropTypes } from 'react';

class HeaderLoggedIn extends Component {
  static propTypes = {
    user: PropTypes.object,
  };

  render() {
    const { user } = this.props;

    return (
      <header>Hi { user.name }</header>
    );
  }
}

export default HeaderLoggedIn;
