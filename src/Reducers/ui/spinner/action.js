export const actionTypes = {
  START_SPINNER             : '/ucr-public/ui/START_SPINNER',
  STOP_SPINNER              : '/ucr-public/ui/STOP_SPINNER',
}

export function startSpinner() {
  return {
    type: actionTypes.START_SPINNER,
  }
}

export function stopSpinner() {
  return {
    type: actionTypes.STOP_SPINNER,
  }
}





