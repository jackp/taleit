/**
 * <HeaderLoggedOut />
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login } from 'actions/user';
import styles from './header.css';

@connect()
class HeaderLoggedOut extends Component {
  login = () => {
    this.props.dispatch(login());
  };

  render() {
    return (
      <header className={styles.root}>
        Logged Out
        <button onClick={this.login}>Login</button>
      </header>
    );
  }
}

export default HeaderLoggedOut;
