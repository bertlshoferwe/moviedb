import React, { Component }     from 'react';
import { Typography } from '@material-ui/core';

class Footer extends Component{ 
    constructor(props){
        super(props);
        this.state={};
    }


    render() {


        const footer = <div className='app-footer'>

                        <Typography>
                            Created by: Weston Bertlshofer
                        </Typography>
                        
                    </div>
;
         

        return(
            <div>
            
                    {footer}

            </div>
        );
    }
}


export default Footer