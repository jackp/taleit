/**
 * <SecondaryLinks />
 * - List of secondary site links
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { logout } from 'actions/user';
import styles from './header.css';

@connect()
class SecondaryLinks extends Component {
  logout = () => {
    this.props.dispatch(logout());
  };

  render() {
    return (
      <div>
        <Link to="settings" className={styles.secondaryLink}>Settings</Link>
        <div onClick={this.logout} className={styles.secondaryLink}>Logout</div>
      </div>
    );
  }
}

export default SecondaryLinks;
