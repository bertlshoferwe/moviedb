
import React, { Component }     from 'react';
import { connect }              from 'react-redux';
import { closeTrailer } from'../../Reducers';
import {withRouter} from 'react-router-dom';
import { Dialog } from '@material-ui/core';
import './trailer.scss'



 class Trailer extends Component{ 
    constructor(props){
        super(props);
        this.state={
            key: 'rlJG2qeQ1RE'
         };

        this.toggleTrailerDialog = this.toggleTrailerDialog.bind(this)
    }

   toggleTrailerDialog() {
       this.props.closeTrailer()
   }

    render() {
        const { isTrailerOpen, trailerKey } = this.props
 
        const trailerPopup =   <Dialog 
                                open={isTrailerOpen} 
                                onClose={ () => { this.toggleTrailerDialog() } }
                                className='trailerDialog' 
                                >
                                <div className='trailerDialogContent'>

                                <iframe 
                                title={trailerKey.name}
                                className='iframe' 
                                src={ "https://www.youtube.com/embed/" + trailerKey.key } 
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                                frameBorder="0"
                                >
                                </iframe>

                                </div>
                            </Dialog>
                                    
    
        return(
            <div >

                { trailerPopup }

            </div>

        );
    }
}
const mapStateToProps = state => {
    const isTrailerOpen = state.trailers.isTrailerOpen;
    const trailerKey = state.trailers.trailerKey

        return{ isTrailerOpen, trailerKey };
}

const mapDispatchToProps = (dispatch) => {
    return{
        closeTrailer:(data) => dispatch( closeTrailer(data)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps )(Trailer))