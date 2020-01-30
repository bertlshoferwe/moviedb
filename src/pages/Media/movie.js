import React, { Component } from 'react';
import { connect }                          from 'react-redux';
import { withRouter }                       from 'react-router'
import queryString                          from 'query-string'
import { getMovieInfo, pageNav }            from '../../Reducers';
import MainInfo                             from '../../components/mediaPages/mainInfo'
// import { Typography }                       from '@material-ui/core';
import './media.scss'


class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
  
        this.pageNavigate = this.pageNavigate.bind(this)
    }



    componentDidMount() { 

        const info = queryString.parse(this.props.location.search);
        
        this.props.getMovieInfo( info.id );
        
    }

    

    pageNavigate(info) {
        // Directs to correct page based upon selected item
        this.props.pageNav(info)
    }

    
    
 
    render() { 

        const { mediaInfo } = this.props

        // Setting page title
        document.title = '';

        //setting up how page will display
        
        return (
                <div>
                    <MainInfo data={ mediaInfo }/>

                </div>


        );
    }
}

// connections to Redux
const mapStateToProps = state => {
    const mediaInfo = state.mediaInfo.movieInfo

    return { mediaInfo };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMovieInfo: (data) => dispatch(getMovieInfo(data)),
        pageNav: (data) => dispatch(pageNav(data)),
    };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Movie))