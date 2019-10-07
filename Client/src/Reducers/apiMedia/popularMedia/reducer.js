import { actionTypes }  from './action'


const INITIAL_STATE =  {
    media_popular:[
            {
            "id": '',
            "vote_count": '',
            "title": '',
            "release_date": '',
            "original_title": '',
            "backdrop_path": '',
            "poster_path": '',
            "media_type": '',
            "loading": true
            },
        ], 
    movie_popular:[
            {
                "id": '',
                "vote_count": '',
                "title": '',
                "release_date": '',
                "original_title": '',
                "backdrop_path": '',
                "poster_path": '',
                "media_type": '',
            },
        ],
    tv_popular:[
            {
                "id": '',
                "vote_count": '',
                "name": '',
                "release_date": '',
                "original_title": '',
                "backdrop_path": '',
                "poster_path": '',
                "media_type": '',
            },
        ],
    people_popular:[
            {
            "id": '',
            "profile_path": '',
            "name": '',
            "media_type": '',
            },
        ],
    homeError: '',
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type){

    //obtains image from fetch in action
        case actionTypes.MEDIA_POPULAR:
            return{ ...state, media_popular: action.payload.results }


        case actionTypes.MOVIE_POPULAR:
            return{ ...state, movie_popular: action.payload.results }


        case actionTypes.TV_POPULAR:        
            return{ ...state, tv_popular: action.payload.results }


        case actionTypes.PEOPLE_POPULAR:
            return{ ...state, people_popular: action.payload.results }

    //incase of any error retrieving fetch info in action
        case actionTypes.HOME_ERROR:
            return{ ...state, homeError: action.payload }
        default:
         return state;
    } 
    
};