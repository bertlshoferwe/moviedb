import { push } from 'connected-react-router'
  
  export const pageNav = ( info ) => {

    const mediaType = info.media_type;
    const searchParam = info.id

    return (dispatch) => {

        switch ( mediaType ) {

            case 'movie':
                dispatch(push( `/movie?Id=${searchParam}` ))
                break;

            case 'tv':
                dispatch(push( `/tv?Id=${searchParam}` ))
                break;

            case 'person':
                dispatch(push( `/person?Id=${searchParam}` )) 

                break;
            default:
                break;
        }
  
    };
  };
  
  
  
  