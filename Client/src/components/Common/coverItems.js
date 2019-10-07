import React, { Component } from 'react';
import { Card, CardMedia, CardContent, Typography} from '@material-ui/core';
import '../../style.scss';

class CoverItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: 'https://image.tmdb.org/t/p/w500',
        };
        
    }

    

    render() {


        const { imageUrl } = this.state

        const results = [];        

        for (var i = 0; i < this.props.data.length; i++) {

            // to show or not to show the overlay
            const movieOverlay =  (this.props.overlay)?
                                                <CardContent className='CardOverlay'> 
                                                    <i className="material-icons movieIcon ">movie</i>
                                                    <div>
                                                        <Typography variant="body1" className='overlayText'>
                                                            {this.props.data[i].title}
                                                        </Typography>
                                                    </div>
                                                </CardContent>
                                            :
                                            <div/>


            const tvOverlay = (this.props.overlay)?
                                            <CardContent className='CardOverlay'> 
                                                <i className="material-icons tvIcon ">tv</i>
                                                <div>
                                                    <Typography variant="body1" className='overlayText'>
                                                        {this.props.data[i].name}
                                                    </Typography>
                                                </div>
                                            </CardContent>
                                        :
                                        <div/>


            const personOverlay = (this.props.overlay)?
                                            <CardContent className='CardOverlay'> 
                                                <i className="material-icons personIcon ">person</i>
                                                <div>
                                                    <Typography variant="body1" className='overlayText'>
                                                        {this.props.data[i].name}
                                                    </Typography>
                                                </div>
                                            </CardContent>
                                        :
                                        <div/>

            // to display poster or backdrop depending on card size
            const moviePhotoUrl = (this.props.cardSize === 'large')? this.props.data[i].backdrop_path : this.props.data[i].poster_path
            const tvPhotoUrl = (this.props.cardSize === ' large')? this.props.data[i].backdrop_path : this.props.data[i].poster_path
           
            // to display photo or loading card 
            const moviePhotoDisplay = (this.props.data[i].loading)?<div className = {this.props.cardSize + 'CardMedia'} />
                                                                    :
                                                                    <div>
                                                                        <CardMedia
                                                                            className={this.props.cardSize + 'CardMedia'}
                                                                            image ={ imageUrl + moviePhotoUrl }
                                                                            title={this.props.data[i].title}
                                                                        /> 
                                                                        {movieOverlay}
                                                                    </div>;


            const tvPhotoDisplay = (this.props.data[i].loading)? <div className = {this.props.cardSize + 'CardMedia'} />
                                                                :
                                                                <div> 
                                                                    <CardMedia
                                                                        className={this.props.cardSize + 'CardMedia'}
                                                                        image ={ imageUrl + tvPhotoUrl }
                                                                        title={this.props.data[i].name}
                                                                    /> 
                                                                    {tvOverlay}
                                                                </div>;

            const personPhotoDisplay = (this.props.data[i].loading)?   <div className = {this.props.cardSize + 'CardMedia'} />
                                                                    :
                                                                        <div> 
                                                                            <CardMedia
                                                                            className={this.props.cardSize + 'CardMedia'}
                                                                            image ={ imageUrl + this.props.data[i].profile_path }
                                                                            title={this.props.data[i].name}
                                                                            /> 
                                                                            {personOverlay}
                                                                        </div>;

           //putting everything together to display
            switch (this.props.data[i].media_type) {
                case 'movie':
                    results.push(<Card key={i} className={this.props.cardSize + 'Card'}
                                               onClick={this.props.selected.bind(null,this.props.data[i])} 
                                               >
                                    <div className='CardMediaWrapper'>
                                        {moviePhotoDisplay}
                                    </div>
                                </Card> 
                    );
                    break;
                case 'tv':
                    results.push(<Card key={i} className={this.props.cardSize + 'Card'} 
                                            onClick={this.props.selected.bind(null,this.props.data[i])} 
                                            >
                                    <div className='CardMediaWrapper'>
                                        {tvPhotoDisplay}
                                    </div>
                                </Card> 
                )
                    break;
                case 'person':
                    results.push(<Card key={i} className={this.props.cardSize + 'Card'} 
                                               onClick={this.props.selected.bind(null,this.props.data[i])}
                                                >
                                    <div className='CardMediaWrapper'>
                                        {personPhotoDisplay}
                                    </div>
                                </Card> 
                    )
                    break;
                default:
                    results.push('')
                    break;
            };
        }


        return (
<div className = {this.props.styleProp}> >

    {results}

</div>

        );
    }
}


export default CoverItems