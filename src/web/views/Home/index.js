/**
 * <HomeView />
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import View from 'containers/View';
import { getUser } from 'actions/user';
import styles from './home.css';

@connect(state => ({
  user: state.user,
}))
class HomeView extends Component {
  static propTypes = {
    user: PropTypes.object,
  };

  handleClick = () => {
    this.props.dispatch(getUser());
  };

  render() {
    return (
      <View className={styles.root}>
        Home View
        { this.props.user ? `Hello ${this.props.user.name}` : null }
        <button onClick={this.handleClick}>Login</button>
      </View>
    );
  }
}

export default HomeView;
