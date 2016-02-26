/**
 * <EditorTitle />
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import { saveDraft } from 'actions/editor';
import styles from './title.css';

@connect()
class EditorTitle extends Component {
  static propTypes = {
    title: PropTypes.string,
  };

  constructor(props) {
    super(props);

    if (__CLIENT__) {
      this.rangy = require('rangy');
      this.rangy.init();
    }

    this.placeholder = 'Title';
    this.state = {
      showPlaceholder: !props.title,
    };
  }

  componentDidMount() {
    // Focus title
    ReactDOM.findDOMNode(this.refs.title).click();
  }

  getValue = () => this.refs.title.textContent;

  setValue = (value) => {
    this.refs.title.textContent = value;
  };

  setCursorToBeginning = () => {
    this.rangy.getSelection().collapse(this.refs.title, 0);
  };

  handleFocus = (e) => {
    if (this.state.showPlaceholder) {
      e.preventDefault();
      this.setCursorToBeginning();
    }
  };

  handleBlur = () => {
    // Reset to placeholder if blank
    if (!this.getValue()) {
      this.setValue(this.placeholder);
      this.setState({ showPlaceholder: true });
    }
  };

  handleKeyPress = () => {
    // Clear placeholder
    if (this.state.showPlaceholder) {
      this.setValue('');
      this.setState({ showPlaceholder: false });
    }
  };

  handleUpdate = () => {
    this.props.dispatch(saveDraft({
      title: this.getValue(),
    }));
  };

  render() {
    const titleClasses = classNames(
      styles.root,
      { [styles.placeholder]: this.state.showPlaceholder }
    );

    return (
      <h1
        ref="title"
        className={titleClasses}
        tabIndex={1}
        contentEditable
        dangerouslySetInnerHTML={{ __html: this.props.title || this.placeholder }}
        onMouseDown={this.handleFocus}
        onClick={this.handleFocus}
        onFocus={this.handleFocus}
        onKeyPress={this.handleKeyPress}
        onBlur={this.handleBlur}
        onInput={this.handleUpdate}
      />
    );
  }
}

export default EditorTitle;
