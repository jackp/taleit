/**
 * <MobileLoggedIn />
 */

import React, { Component, PropTypes } from 'react';

import styles from './header.css';

class MobileLoggedIn extends Component {
  static propTypes = {
    user: PropTypes.object,
  };

  render() {
    const { user } = this.props;

    return (
      <div className={styles.mobile}>
        MobileLoggedIn
      </div>
    );
  }
}

export default MobileLoggedIn;
