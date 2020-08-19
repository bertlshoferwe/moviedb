
import React, { Component }     from 'react';
import { Typography } from '@material-ui/core';



 class MediaTitle extends Component{ 
    constructor(props){
        super(props);
        this.state={
         };

    }


    render() {
        const { data } = this.props

        return(
            <div className='mediaTitleWrapper'>
                <Typography className='mediaTitle' variant='h4'>
                    {data.name || data.title}
                </Typography>
                
                <Typography className='meidaYear' variant='h6' align='justify'>
                    { (data.title !== undefined)? data.release_date.substr(0,4) :  data.first_air_date.substr(0,4) }
                </Typography>
            </div>

        );
    }
}

export default MediaTitle