
import React, { Component, Fragment }     from 'react';
import { Card, CardContent, Dialog, DialogActions, DialogTitle, DialogContent, TextField, Button} from '@material-ui/core';



 class LoginDialog extends Component{ 
    constructor(props){
        super(props);
        this.state={ 
            login:true,

         };

    }



    render() {

        //// deconstruct props ////
        const { dialogToggle, dialogVisible, loginDisplay, email, password, onEmailChange, onPasswordChange, loginButtonPress, registerButtonPress, loginError, registerError} = this.props

        const emailText= (loginDisplay)?  <TextField 
                                                    error={(loginError.includes('email') )}
                                                    autoFocus
                                                    name='Email'
                                                    label="Email"
                                                    type="email"
                                                    value={email}
                                                    onChange={onEmailChange}
                                                    helperText={(loginError.includes('email')? 'Invalid Email' : '' )}
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
                                                />;

            const passwordText = (loginDisplay)?  <TextField 
                                                        error={(loginError.includes('password'))}
                                                        name='password'
                                                        label="Password"
                                                        type="password"
                                                        value={password}
                                                        onChange={onPasswordChange}
                                                        helperText={(loginError.includes('password')? 'Incorrect password' : '' )}
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
                                                    <Card>
                                                        <CardContent className='loginTextFieldWrapper'>
                                                          
                                                            {emailText}
                                                        
                                                            {passwordText}

                                                        </CardContent>
                                                    </Card> 
                                                </form>
                                                <div>
                                                   { (loginDisplay)? 
                                                        <Button onClick={ () =>{ this.setState({ login:false})}}>
                                                            Need to register
                                                        </Button>
                                                    :
                                                        <Button onClick={ () =>{ this.setState({ login:true})}}>
                                                            Try Login?
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