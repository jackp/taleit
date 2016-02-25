/**
 * <DesktopLoggedOut />
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login } from 'actions/user';
import styles from './header.css';

@connect()
class DesktopLoggedOut extends Component {
  login = () => {
    this.props.dispatch(login());
  };

  render() {
    return (
      <div className={styles.desktop}>
        Logged Out
        <button onClick={this.login}>Login</button>
      </div>
    );
  }
}

export default DesktopLoggedOut;
