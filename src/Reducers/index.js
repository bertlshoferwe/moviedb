import { combineReducers } from 'redux';

import authReducer from './firebaseAuth/reducer'
import spinner from './ui/spinner/reducer'
import homeReducer from './apiMedia/popularMedia/reducer'
import queryReducer from './apiMedia/searchQuery/reducer'
import mediaPageInfo  from './apiMedia/mediaInfo/reducer'
import trailers from './apiMedia/trailerInfo/reducer'
import modalOfSearch from './ui/searchModal/reducer'

//////////////////////////////////
//// Export Reducers/////////////
////////////////////////////////

const Reducers = combineReducers({

    auth: authReducer,
    spinner: spinner,
    home: homeReducer,
    search: queryReducer,
    mediaInfo: mediaPageInfo,
    trailers: trailers,
    search_Model: modalOfSearch,


})

export default Reducers;


//////////////////////////////////
//// Export Actions /////////////
////////////////////////////////

export * from './firebaseAuth/action'
export * from './ui/spinner/action'
export * from './apiMedia/popularMedia/action'
export * from './apiMedia/searchQuery/action'
export * from './apiMedia/mediaInfo/action'
export * from './navigation/action'
export * from './apiMedia/trailerInfo/action'
export * from './ui/searchModal/action'
