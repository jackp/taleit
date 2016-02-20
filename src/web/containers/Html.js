/**
 * <Html />
 * - Site container
 * - TODO: Make this stateless component once supported by HMRE
 */

import React, { Component, PropTypes } from 'react';

class Html extends Component {
  render() {
    return (
      <html>
        <head>
          <title>{ this.props.title}</title>
        </head>
        <body>
          <div id="root" dangerouslySetInnerHTML={{ __html: this.props.content }}></div>
        </body>
      </html>
    );
  }
}

export default Html;
