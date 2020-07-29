
import React, { Component, Fragment }     from 'react';
import { Dialog, DialogActions, DialogTitle, DialogContent, TextField, Button} from '@material-ui/core';



 class LoginDialog extends Component{ 
    constructor(props){
        super(props);
        this.state={ 
            login:true,

         };

    }



    render() {

        //// deconstruct props ////
        const { dialogToggle, dialogVisible, loginDisplay, email, password, onEmailChange, onPasswordChange, loginButtonPress, registerButtonPress, loginError, registerError, loginToggle } = this.props

        const emailText= (loginDisplay)?  <TextField 
                                                    error={(loginError.includes('email') )}
                                                    autoFocus
                                                    name='Email'
                                                    label="Email"
                                                    type="email"
                                                    value={email}
                                                    onChange={onEmailChange}
                                                    helperText={(loginError.includes('email')? 'Invalid Email' : '' )}
                                                    margin="normal"
                                                    variant="outlined"
                                                />
                                                :
                                                <TextField 
                                                    error={(registerError.includes('email') )}
                                                    autoFocus
                                                    name='Email'
                                                    label="Email"
                                                    type="email"
                                                    value={email}
                                                    onChange={onEmailChange}
                                                    helperText={(registerError.includes('email')? 'Invalid Email' : '' )}
                                                    margin="normal"
                                                    variant="outlined"
                                                />;

            const passwordText = (loginDisplay)?  <TextField 
                                                        error={(loginError.includes('password'))}
                                                        name='password'
                                                        label="Password"
                                                        type="password"
                                                        value={password}
                                                        onChange={onPasswordChange}
                                                        helperText={(loginError.includes('password')? 'Incorrect password' : '' )}
                                                        margin="normal"
                                                        variant="outlined"
                                                    />
                                                    :
                                                    <TextField 
                                                        error={(registerError.includes('password'))}
                                                        name='password'
                                                        label="Password"
                                                        type="password"
                                                        value={password}
                                                        onChange={onPasswordChange}
                                                        helperText={(registerError.includes('password')? 'Password must be atleast 6 characters' : '' )}
                                                        margin="normal"
                                                        variant="outlined"
                                                    />

            const dialogDisplay = <Dialog
                                    open={ dialogVisible }
                                    onClose={ () => {dialogToggle(false)} }
                                    >
                                        <DialogTitle>
                                           { (loginDisplay)? 'Login' : 'Register'}
                                        </DialogTitle>
                                         <DialogContent>
                                                <form>
                                                    <div className='loginTextFieldWrapper'>
                                                          
                                                            {emailText}
                                                        
                                                            {passwordText}

                                                    </div> 
                                                </form>
                                                <div>
                                                   { (loginDisplay)? 
                                                //    need to switch from using state to useing redux state
                                                        <Button onClick={ () =>{ loginToggle(false) } }> 
                                                            Register
                                                        </Button>
                                                    :
                                                        <Button onClick={ () =>{ loginToggle(true) } }>
                                                            Login
                                                        </Button>
                                                    }
                                                </div>                                                     
                                            </DialogContent>

                                            <DialogActions>
                                                <Button color='primary' onClick={( loginDisplay )? loginButtonPress : registerButtonPress } >
                                                    {( loginDisplay )? 'Login' : 'Register'}
                                                </Button>

                                                <Button color='secondary' onClick={ () => {dialogToggle(false)} } >
                                                    Close
                                                </Button>
                                            </DialogActions>

                                </Dialog>
        
        return(

            <Fragment>
                {dialogDisplay}
            </Fragment>

        );
    }
}

export default LoginDialog