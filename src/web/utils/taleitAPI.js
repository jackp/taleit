/**
 * TaleitAPI Utilities
 */

import cookie from 'react-cookie';

// Wrapper for fetch API
function fetchWrapper(url, options = {}) {
  const apiBase = 'http://localhost:3001'; // TODO: grab this from somewhere

  return new Promise((resolve, reject) => {
    const jwt = cookie.load('taleit-jwt');

    fetch(`${apiBase}${url}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: jwt ? `Bearer ${jwt}` : null,
      },
      ...options,
    })
    // Process response
    .then(response => {
      if (response.status === 204) { // No-content
        return null;
      }

      return response.json();
    })
    .then(json => {
      if (json && json.error) {
        resolve(new Error(json.error));
      } else {
        resolve(json);
      }
    })
    .catch(error => reject(error));
  });
}

export {
  fetchWrapper as default,
};
