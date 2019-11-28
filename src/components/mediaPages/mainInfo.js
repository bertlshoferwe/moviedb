
import React, { Component }     from 'react';
import { Card, CardMedia } from '@material-ui/core';



 class MainInfo extends Component{ 
    constructor(props){
        super(props);
        this.state={
            imageUrl: 'https://image.tmdb.org/t/p/w500',
         };

    }


    render() {
        const { data } = this.props
        const { imageUrl } = this.state

       const poster = <Card className='mediaPoster'>
                        <CardMedia
                            className='mediaPoster'
                            image ={ (data.media_type === 'person')? imageUrl + data.profile_path : imageUrl + data.poster_path }
                            title={ (data.poster_path === 'person')? data.name : data.title }
                            />
                        </Card>
        

        const pageSetup = <div>
                            {poster}
                            

                        </div>
                            
    
        return(
            <div >

                { pageSetup }

            </div>

        );
    }
}

export default MainInfo