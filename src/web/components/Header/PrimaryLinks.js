/**
 * <PrimaryLinks />
 * - List of primary site links
 */

import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './header.css';

class PrimaryLinks extends Component {
  render() {
    return (
      <div>
        <Link to="create" className={styles.primaryLink}>CREATE</Link>
        <Link to="discover" className={styles.primaryLink}>DISCOVER</Link>
      </div>
    );
  }
}

export default PrimaryLinks;
