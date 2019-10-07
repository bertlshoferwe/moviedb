import { combineReducers } from 'redux';

import authReducer from './firebaseAuth/reducer'
import spinner from './ui/spinner/reducer'
import homeReducer from './apiMedia/popularMedia/reducer'
import queryReducer from './apiMedia/searchQuery/reducer'
import movieInfoReview  from './apiMedia/mediaInfo.js/reducer'

//////////////////////////////////
//// Export Reducers/////////////
////////////////////////////////

const Reducers = combineReducers({

    auth: authReducer,
    spinner: spinner,
    home: homeReducer,
    search: queryReducer,
    movieInfo: movieInfoReview,


})

export default Reducers;


//////////////////////////////////
//// Export Actions /////////////
////////////////////////////////

export * from './firebaseAuth/action'
export * from './ui/spinner/action'
export * from './apiMedia/popularMedia/action'
export * from './apiMedia/searchQuery/action'
export * from './apiMedia/mediaInfo.js/action'