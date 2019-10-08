
import React, { Component }     from 'react';
import { connect }              from 'react-redux';
import { emailChanged } from'../../Reducers';
import {withRouter} from 'react-router-dom';
import { Fab} from '@material-ui/core'
import './fab.scss'



 class SearchFab extends Component{ 
    constructor(props){
        super(props);
        this.state={
           
         };
        
    }

    render() {

        
    
        return(
            <div className = 'fabloc'>
               <Fab className='fab'></Fab>
            </div>

        );
    }
}
const mapStateToProps = state => {
    const registerPasswordError = state.auth.registerPasswordError;

        return{ registerPasswordError };
}

const mapDispatchToProps = (dispatch) => {
    return{
        emailChanged:(text) => dispatch(emailChanged(text)),  
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps )(SearchFab))