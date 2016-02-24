/**
 * <Html />
 * - Site container
 * - TODO: Make this stateless component once supported by HMRE
 */

import React, { Component, PropTypes } from 'react';

class Html extends Component {
  render() {
    const {
      head,
      serverStyles,
      assets,
      content,
      initialState,
    } = this.props;

    return (
      <html>
        <head>
          { head.title.toComponent() }
          { head.base.toComponent() }
          { head.meta.toComponent() }
          { this.props.serverStyles ? <style id="serverStyles" dangerouslySetInnerHTML={{ __html: serverStyles }}/> : null }
        </head>
        <body>
          <div id="root" dangerouslySetInnerHTML={{ __html: content }}></div>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.__INITIAL_STATE__ = ${
                JSON.stringify(initialState, null, 2)
              };`,
            }}
          />
          <script src={assets.js} />
        </body>
      </html>
    );
  }
}

Html.propTypes = {
  initialState: PropTypes.object,
  serverStyles: PropTypes.string,
  assets: PropTypes.object,
  head: PropTypes.object,
  content: PropTypes.string,
};

export default Html;
