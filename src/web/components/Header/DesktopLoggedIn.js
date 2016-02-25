/**
 * <DesktopLoggedIn />
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { IndexLink, Link } from 'react-router';

import { logout } from 'actions/user';
import Icon from 'components/Icon';
import logo from 'images/logo.svg';
import styles from './header.css';

@connect()
class DesktopLoggedIn extends Component {
  static propTypes = {
    user: PropTypes.object,
  };

  logout = () => {
    this.props.dispatch(logout());
  };

  render() {
    const { user } = this.props;

    return (
      <div className={styles.desktop}>
        <IndexLink to="/" className={styles.logo}>
          <img src={logo} />
        </IndexLink>
        <Link to="create" className={styles.primaryLink}>CREATE</Link>
        <Link to="discover" className={styles.primaryLink}>DISCOVER</Link>

        <div className={styles.rightMenu}>
          <Link to={user.username} className={styles.dropdownItem}>
            { user.name }
            <Icon name="caret-down" />
          </Link>
          <div className={styles.dropdownMenu}>
            <Link to="settings" className={styles.dropdownMenuItem}>Settings</Link>
            <div onClick={this.logout} className={styles.dropdownMenuItem}>Logout</div>
          </div>
        </div>
      </div>
    );
  }
}

export default DesktopLoggedIn;
