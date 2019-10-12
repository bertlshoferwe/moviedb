export const actionTypes = {
    OPEN_TRAILER             : 'open_trailer',
    CLOSE_TRAILER              : 'close_trailer',
  }
  
  export function openTrailer(key) {
    return {
      type: actionTypes.OPEN_TRAILER,
      payload: key
    }
  }
  
  export function closeTrailer() {
    return {
      type: actionTypes.CLOSE_TRAILER,
    }
  }
  
  
  
  
  
  