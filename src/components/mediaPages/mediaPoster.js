
import React, { Component }     from 'react';
import {  CardMedia } from '@material-ui/core';



 class MediaPoster extends Component{ 
    constructor(props){
        super(props);
        this.state={
            imageUrl: 'https://image.tmdb.org/t/p/w500',
         };

    }


    render() {
        const { data } = this.props
        const { imageUrl } = this.state
                            
    
        return(
            <div >
                <CardMedia
                    className='mediaPoster'
                    image ={ (data.media_type === 'person')? imageUrl + data.profile_path : imageUrl + data.poster_path }
                    title={ (data.poster_path === 'person')? data.name : data.title }
                    />
            </div>

        );
    }
}

export default MediaPoster