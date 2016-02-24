/**
 * <App />
 * - Main application container
 */

import React, { Component } from 'react';

import styles from './app.css';

class App extends Component {
  render() {
    return (
      <div className={styles.root}>
        { this.props.children }
      </div>
    );
  }
}

export default App;
