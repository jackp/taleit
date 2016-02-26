/**
 * <EditorHeader />
 */

import React, { Component } from 'react';
import { IndexLink } from 'react-router';

import Icon from 'components/Icon';
import styles from './editorHeader.css';

class EditorHeader extends Component {
  render() {
    return (
      <header className={styles.root}>
        <IndexLink to="/"><Icon name="home" /></IndexLink>
      </header>
    );
  }
}

export default EditorHeader;
