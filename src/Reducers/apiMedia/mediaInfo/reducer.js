import { actionTypes }  from './action'

const INITIAL_STATE =  {
    movieInfo: {
        poster_path:'',
        vote_average:'',
        title:'',
        release_date:'',
        overview:'',
        total_results:'',
        reviews:{
            total_results:0,
            results:{
                0:{
                    author:'',
                    content:''
                }
            },
        },
        credits:{
            cast:{
                0:{
                    character: '',
                    credit_id: '',
                    id: '',
                    name: '',
                    profile_path: ''
                    }
                },
            crew:{
                name:'',
                job:''
            }
            },
        videos:{
            results:{
                0:{
                    name:'',
                    key:'',
                }
            }
        },
    },
    tvInfo: {
        poster_path:'',
        vote_average:'',
        name:'',
        first_air_date:'',
        overview:'',
        total_results:'',
        seasons: {
            0:{
                air_date:'',
                episode_count:'',
                poster_path:'',
                season_number:''
            }
        },
        credits:{
            cast:{
                0:{
                    character: '',
                    credit_id: '',
                    id: '',
                    name: '',
                    profile_path: ''
                    }
                },
            crew:{
                name:'',
                job:''
            }
            },
            videos:{
                results:{
                    0:{
                        name:'',
                        key:'',
                    }
                }
            },
        },
    peopleInfo:{
        profile_path: '',
        name:'',
        birthday: '',
        biography:'',
        place_of_birth: ''
    },
    error: '',
    loading:true,
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case actionTypes.INFOLOADING:
            return{ ...state, loading: false}
        case actionTypes.MOVIEINFO:
            return{ ...state, movieInfo: action.payload, loading: true }
        case actionTypes.TVINFO:
            return{ ...state, tvInfo: action.payload, loading: true}
        case actionTypes.PEOPLEINFO:
            return { ...state, peopleInfo: action.payload, loading:true }
        case actionTypes.ERROR:
            return{ ...state, error: action.payload }
        default:
         return state;
    } 
    
};