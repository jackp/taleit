/**
 * <View />
 * - Wrapper for all /views
 * - Set custom title/meta/etc tags per view
 */

import React, { Component } from 'react';
import classNames from 'classnames';

import styles from './view.css';

class View extends Component {
  render() {
    const rootClasses = classNames(
      styles.root,
      this.props.className
    );

    return (
      <main className={rootClasses}>
        {this.props.children}
      </main>
    );
  }
}

export default View;
