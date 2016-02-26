/**
 * <EditorView />
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { showHeader, hideHeader } from 'actions/ui';
import View from 'containers/View';
import EditorHeader from './EditorHeader';
import EditorTitle from './EditorTitle';
import EditorContent from './EditorContent';
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
        <EditorHeader />
        <EditorTitle />
        <EditorContent />
      </View>
    );
  }
}

export default EditorView;
