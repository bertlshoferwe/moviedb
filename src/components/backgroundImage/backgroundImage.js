import React, { Component }     from 'react';
import { Button, Fab } from '@material-ui/core';

class BackgroundImage extends Component{ 
    constructor(props){
        super(props);
        this.state={};
    }


    render() {


        const Image = <div className='topHomeImageWrapper'>
                            <img className='image' src={ 'https://image.tmdb.org/t/p/w500' + this.props.data[0].backdrop_path } alt = '' />
                            <div className='buttonWrapper' >
                                <Button onClick={this.props.selected.bind( null,this.props.data[0] )}  variant="outlined" component="span" className='mediaPopButton' >
                                    {this.props.data[0].title}
                                </Button>
                                <Fab size="large" className='fabOutline' onClick={this.props.trailerSelect.bind( null, this.props.data[0])}>
                                    <i className="material-icons">
                                    play_arrow
                                    </i>
                                </Fab>
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