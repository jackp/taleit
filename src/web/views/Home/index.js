/**
 * <HomeView />
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import View from 'containers/View';
import { getUser } from 'actions/user';
import styles from './home.css';

@connect()
class HomeView extends Component {
  handleClick = () => {
    this.props.dispatch(getUser());
  };

  render() {
    return (
      <View className={styles.root}>
        Home View
        <button onClick={this.handleClick}>Login</button>
      </View>
    );
  }
}

export default HomeView;
