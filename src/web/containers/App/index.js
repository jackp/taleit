/**
 * <App />
 * - Main application container
 */

import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { provideHooks } from 'redial';

import { getUser } from 'actions/user';
import styles from './app.css';

@provideHooks({
  prefetch: ({ dispatch }) => dispatch(getUser()),
})
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
