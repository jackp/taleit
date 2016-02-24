/**
 * <Html />
 * - Site container
 * - TODO: Make this stateless component once supported by HMRE
 */

import React, { Component, PropTypes } from 'react';

class Html extends Component {
  render() {
    const { head, serverStyles, assets, content } = this.props;

    return (
      <html>
        <head>
          { head.title.toComponent() }
          { head.base.toComponent() }
          { head.meta.toComponent() }
          { this.props.serverStyles ? <style dangerouslySetInnerHTML={{ __html: serverStyles }}/> : null }
        </head>
        <body>
          <div id="root" dangerouslySetInnerHTML={{ __html: content }}></div>
          <script src={assets.js}/>
        </body>
      </html>
    );
  }
}

Html.propTypes = {
  serverStyles: PropTypes.string,
  assets: PropTypes.object,
  head: PropTypes.object,
  content: PropTypes.string,
};

export default Html;
