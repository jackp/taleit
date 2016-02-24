/**
 * <App />
 * - Main application container
 */

import React, { Component } from 'react';
import Helmet from 'react-helmet';

import styles from './app.css';

class App extends Component {
  render() {
    return (
      <div className={styles.root}>
        <Helmet
          title="Tell your story"
          titleTemplate="%s | TaleIt"
          meta={[
            { name: 'description', content: 'TaleIt Application' },
          ]}
        />
        { this.props.children }
      </div>
    );
  }
}

export default App;
