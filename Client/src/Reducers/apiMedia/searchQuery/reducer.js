import { actionTypes }  from './action'

const INITIAL_STATE =  {
    query:'',
    searched:[{
        0:{
            media_type: ''
        }
    }],
    results:[{
        0:{
            
        }
    }],
    page: 2,
    error: '',
    loading:true,
    numOfPages: 0,
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case actionTypes.LOADING:
            return{ ...state, loading: false}
        case actionTypes.ONSEARCHANGE:
            return{ ...state, searched: action.payload, page: action.page, numOfPages: action.totalPages }
        case actionTypes.UPDATESEARCH:
            return{...state, results: [...state.results.concat(action.payload)], page: action.page, numOfPages: action.totalPages }
        case actionTypes.SEARCHED:
            return{ ...state, query: action.payload}
        case actionTypes.SEARCHEDNULL:
            return{ ...state, query: '' }
        case actionTypes.RESULTS:
            return{ ...state, results: action.payload}
        case actionTypes.ERROR:
            return{ ...state, error: action.payload }
        default:
            return state;
    } 
    
};