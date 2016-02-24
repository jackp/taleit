/**
 * <IndexView />
 * - Determines whether to show <HomeView /> or <LandingView />
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import HomeView from 'views/Home';
import LandingView from 'views/Landing';

@connect(state => ({
  user: state.user,
}))
class IndexView extends Component {
  static propTypes = {
    user: PropTypes.object,
  };

  render() {
    return this.props.user ? <HomeView /> : <LandingView />;
  }
}

export default IndexView;
