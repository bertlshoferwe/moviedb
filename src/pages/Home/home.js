import React, { Component, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { getHomeInfo, MovieTrailer, TvTrailer, pageNav } from '../../Reducers';
import { Typography } from '@material-ui/core';
import './home.scss'
const CoverItems = lazy(() => import('../../components/coverItems/coverItems'));
const BackgroundImage = lazy(() => import('../../components/backgroundImage/backgroundImage'));

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: 'https://image.tmdb.org/t/p/w500',
            id: '',
            mediaType: '', 
        };
  
        this.pageNavigate = this.pageNavigate.bind(this)
        this.isTrailerOpen = this.isTrailerOpen.bind(this)
    }



    componentDidMount() { 
        this.gatherAllInfo()
    }

    gatherAllInfo(){
        this.props.getHomeInfo();
        
    }

    isTrailerOpen(info){

        switch( info.media_type ){

            case 'movie':
                this.props.MovieTrailer(info.id)
                break;
            
            case 'tv':
                this.props.TvTrailer(info.id)
                break;

            default:
                break;
        }
    }

    pageNavigate(info) {
        // Directs to correct page based upon selected item
        this.props.pageNav(info)
    }

    
    
 
    render() { 
        // Setting page title
        document.title = 'Movie Database'

        //setting up how page will display
        const displayPage = <div>
                                {/* Top Popular packground  */}
                            <Suspense fallback={<div>Loading...</div>}>
                                < BackgroundImage 
                                data={this.props.mediaPopular} 
                                selected={this.pageNavigate}
                                trailerSelect={ this.isTrailerOpen }
                                />
                            </Suspense>

                            <Suspense fallback={<div>Loading...</div>}>

                            <div className='lowerHomePage' >    
                                {/* Movie Slider Display */}
                                <Typography variant="h5" className='overlayText'>
                                    Movies
                                </Typography>

                                <div className = 'slider'>
                                    <CoverItems data={this.props.moviePopular} 
                                                overlay={false} 
                                                styleProp={'slideWrapper'} 
                                                selected={this.pageNavigate}
                                                cardSize={''} 
                                                isImageLoaded={this.isImageLoaded}
                                    /> 
                                </div>
                                {/* Television Slider Display */}
                                <Typography variant="h5" className='overlayText'>
                                    Television
                                </Typography>
                                <div className = 'slider'>
                                    <CoverItems data={this.props.tvPopular} 
                                                overlay={false} 
                                                styleProp={'slideWrapper'} 
                                                selected={this.pageNavigate}
                                                cardSize={''}  
                                                isImageLoaded={this.isImageLoaded}
                                                />
                                </div>
                            {/* People Slider Display */}
                                <Typography variant="h5" className='overlayText'>
                                    People
                                </Typography>
                                <div className = 'slider'>
                                    <CoverItems data={this.props.peoplePopular} 
                                                overlay={true} 
                                                styleProp={'slideWrapper'} 
                                                selected={this.pageNavigate}
                                                cardSize={'large'}
                                                isImageLoaded={this.isImageLoaded}  
                                                />  
                                </div> 
                                </div>
                            </Suspense>
                            </div>
       
        
        return (
                <div>

                    {displayPage}

                </div>


        );
    }
}

// connections to Redux
const mapStateToProps = state => {
    const mediaPopular = state.home.media_popular
    const moviePopular = state.home.movie_popular
    const tvPopular = state.home.tv_popular
    const peoplePopular = state.home.people_popular

    return { mediaPopular, moviePopular, tvPopular, peoplePopular };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getHomeInfo: (data) => dispatch(getHomeInfo(data)),
        MovieTrailer: (data) => dispatch(MovieTrailer(data)),
        TvTrailer: (data) => dispatch(TvTrailer(data)),
        pageNav: (data) => dispatch(pageNav(data)),
    };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))