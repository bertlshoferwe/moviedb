import React, { Component }     from 'react';
import { Button, Fab } from '@material-ui/core';

class BackgroundImage extends Component{ 
    constructor(props){
        super(props);
        this.state={
        };

    }

    render() {


        const Image = 
                        <div className='topHomeImageWrapper'>
                            <img 
                                className='image' 
                                src={ ( this.props.data[0].backdrop_path.length > 0 )?'https://image.tmdb.org/t/p/w500' + this.props.data[0].backdrop_path : ''} 
                                alt = '' 
                                />
                            <div className='buttonWrapper' >
                                <Fab size="large" className='fabOutline' onClick={this.props.trailerSelect.bind( null, this.props.data[0])}>
                                    <i className="material-icons">
                                     play_arrow
                                    </i>
                                </Fab>
                                <Button onClick={this.props.selected.bind( null,this.props.data[0] )}  variant="outlined" component="span" className='mediaPopButton' >
                                    {( this.props.data[0].title.length > 0 )? this.props.data[0].title: 'More Info'}
                                </Button>
                            </div>
                        </div>
                    ;
         

        return(
            <div>
            
                    {Image}

            </div>
        );
    }
}

export default BackgroundImage