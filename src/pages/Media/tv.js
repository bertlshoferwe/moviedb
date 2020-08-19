import React, { Component } from 'react';
import { connect }                          from 'react-redux';
import { withRouter }                       from 'react-router'
import queryString                          from 'query-string'
import { getTvInfo, pageNav }            from '../../Reducers';
import MediaPoster                             from '../../components/mediaPages/mediaPoster'
import MediaInfo                             from '../../components/mediaPages/mediaInfo'
import MediaTitle                             from '../../components/mediaPages/mediaTitle'
import { Card }                       from '@material-ui/core';
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
        
        this.props.getTvInfo( info.id );
        
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
            <Card>
                <MediaPoster data={ mediaInfo }/>
                <MediaTitle data={mediaInfo } />
                <MediaInfo data={mediaInfo} />

            </Card>


        );
    }
}

// connections to Redux
const mapStateToProps = state => {
    const mediaInfo = state.mediaInfo.tvInfo

    return { mediaInfo };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTvInfo: (data) => dispatch(getTvInfo(data)),
        pageNav: (data) => dispatch(pageNav(data)),
    };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Movie))