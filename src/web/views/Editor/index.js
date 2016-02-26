/**
 * <EditorView />
 */

import React, { Component } from 'react';

import View from 'containers/View';
import styles from './editor.css';

class EditorView extends Component {
  render() {
    return (
      <View className={styles.root}>
        Editor View
      </View>
    );
  }
}

export default EditorView;
