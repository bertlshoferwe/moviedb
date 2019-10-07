import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { getHomeInfo } from '../Reducers';
import { Typography} from '@material-ui/core';
import CoverItems from './Common/coverItems'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: 'https://image.tmdb.org/t/p/w500',
            height: '',
            width: '',
            id: '',
            mediaType: '',
        };
  
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
        this.pageNavigate = this.pageNavigate.bind(this)
    }



    componentDidMount() { 
        this.gatherAllInfo()
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    // Update window dimensions
    updateWindowDimensions() {
        this.setState({
            Height: window.innerHeight,
            Width: window.innerWidth
        });
    }

    gatherAllInfo(){
        this.props.getHomeInfo()
    }

    pageNavigate(info) {
        // Directs to correct page based upon selected item
        switch (info.media_type) {
            case 'movie':
                this.props.history.push({
                    pathname: `/movie`,
                    search: `Id=${info.id}`,
                })
                break;
            case 'tv':
                this.props.history.push({
                    pathname: `/tv`,
                    search: `Id=${info.id}`,
                })
                break;
            case 'person':
                this.props.history.push({
                    pathname: `/person`,
                    search: `Id=${info.id}`,
                }) 

                break;
            default:
                break;
        }
    }

    
    

    render() { 
        // Setting page title
        document.title = 'Movie Database'
 

        const displayPage = <div>
                                {/* Top Popular movie carosal  */}
                                <div className = 'slider'>
                                    <CoverItems data={this.props.mediaPopular} 
                                                overlay={true} 
                                                styleProp={'slideWrapper'} 
                                                selected={this.pageNavigate}
                                                cardSize={'large'}
                                                isImageLoaded={this.isImageLoaded} 
                                                
                                    />  
                                </div>
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
                                                cardSize={''}
                                                isImageLoaded={this.isImageLoaded}  
                                                />  
                                </div> 
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
    };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))