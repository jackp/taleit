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
          { this.props.serverStyles ? <style dangerouslySetInnerHTML={{ __html: this.props.serverStyles }}/> : null }
        </head>
        <body>
          <div id="root" dangerouslySetInnerHTML={{ __html: this.props.content }}></div>
          <script src={this.props.assets.js}/>
        </body>
      </html>
    );
  }
}

Html.propTypes = {
  serverStyles: PropTypes.string,
  assets: PropTypes.object,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default Html;
