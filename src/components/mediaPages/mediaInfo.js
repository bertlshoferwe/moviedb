
import React, { Component }     from 'react';
import {  CardContent, Typography } from '@material-ui/core';



 class MediaInfo extends Component{ 
    constructor(props){
        super(props);
        this.state={
            imageUrl: 'https://image.tmdb.org/t/p/w500',
         };

    }


    render() {
        const { data } = this.props
                            
        return(
            <div >
                <CardContent>
                    <Typography className="mediaInfo" variant='body2'>
                        {data.overview}
                    </Typography>
                </CardContent>
            </div>

        );
    }
}

export default MediaInfo