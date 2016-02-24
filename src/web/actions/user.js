/**
 * User-related actions
 */

export const updateUser = (user) => (
  {
    type: 'UPDATE_USER',
    payload: user,
  }
);

export const getUser = () => (dispatch) => {
  fetch('http://localhost:3001/login')
  .then(response => response.json())
  .then(user => dispatch(updateUser(user)))
  .catch(error => console.log(error));
};
