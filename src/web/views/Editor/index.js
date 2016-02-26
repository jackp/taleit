/**
 * <EditorView />
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { showHeader, hideHeader } from 'actions/ui';
import View from 'containers/View';
import styles from './editor.css';

@connect()
class EditorView extends Component {
  componentWillMount() {
    this.props.dispatch(hideHeader());
  }

  componentWillUnmount() {
    this.props.dispatch(showHeader());
  }

  render() {
    return (
      <View className={styles.root}>
        Editor View
      </View>
    );
  }
}

export default EditorView;
