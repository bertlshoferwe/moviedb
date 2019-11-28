import { push } from 'connected-react-router'

  
  export const pageNav = ( info ) => {

    const mediaType = info.media_type;

    let searchParam = info.id;

    return (dispatch) => {

        switch ( mediaType ) {

            case 'movie':
                dispatch(push( `/movie?id=${searchParam}` ))
                break;

            case 'tv':
                dispatch(push( `/tv?id=${searchParam}` ))
                break;

            case 'person':
                dispatch(push( `/person?id=${searchParam}` )) 

                break;
            default:
                break;
        }
  
    };
  };
  
  
  
  