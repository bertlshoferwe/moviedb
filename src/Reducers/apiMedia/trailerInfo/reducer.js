import { actionTypes }  from './action'

const INITIAL_STATE =  {
    movieTrailer: {
                    name:'',
                    key:'',
                },
    tvTrailer: {
                name:'',
                key:'',
            },
    error: '',
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case actionTypes.TVTRAILER:
            return{ ...state, tvTrailer: action.payload.videos.results}[0]
        case actionTypes.MOVIETRAILER:
            return{ ...state, movieTrailer: action.payload.videos.results[0] }
        default:
         return state;
    } 
    
};