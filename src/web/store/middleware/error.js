/**
 * Error Handler
 */

export default () => next => action => {
  if (action.error) {
    console.log('ERROR:', action.payload.message);
    // TODO: Use debug()
    // TODO: Dispatch action to show a toastr message or something on error
  }

  return next(action);
};
