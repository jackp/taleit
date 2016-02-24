/**
 * TaleitAPI Utilities
 */

// Wrapper for fetch API
function fetchWrapper(url, options = {}) {
  const apiBase = 'http://localhost:3001'; // TODO: grab this from somewhere
  return new Promise((resolve, reject) => {
    fetch(`${apiBase}${url}`, options)
    // Convert response to json
    .then(response => response.json())
    .then(json => {
      if (json.error) {
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
