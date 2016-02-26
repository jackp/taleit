/**
 * <Icon />
 */

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

if (__CLIENT__) {
  require('style!css!font-awesome/css/font-awesome.css');
}

class Icon extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  render() {
    const iconClasses = classNames(
      'fa',
      `fa-${this.props.name}`,
    );

    return (
      <i className={iconClasses} />
    );
  }
}

export default Icon;
