
import React, { Component }     from 'react';
import { Card, Dialog, TextField, Button} from '@material-ui/core';



 class LoginDialog extends Component{ 
    constructor(props){
        super(props);
        this.state={ 
            login:true,
         };

    }

    render() {
        
        const { registerErrorEmail, registerErrorPassword, dialogToggle, dialogVisible, email, password, onEmailChange, onPasswordChange, loginButtonPress, registerButtonPress } = this.props

        
        const actions = [
            <Button
              label={( this.state.login )? 'Login' : 'Register'}
              primary={true}
              onClick={( this.state.login )? loginButtonPress : registerButtonPress }
            />,
            <Button
              label="Close"
              secondary={true}
              onClick={dialogToggle}
            />
          ];

        const View = (this.state.login)? <div className='app-flexColumn'>
                                            <h1 className='app-center'>Login</h1>
                                            <form className='app-flexColumn app-center'>
                                                <Card>
                                                    <TextField 
                                                        name='username'
                                                        floatingLabelText="Username"
                                                        value={email}
                                                        onChange={onEmailChange}
                                                    />
                                                
                                                    <TextField 
                                                        name='password'
                                                        floatingLabelText="Password"
                                                        value={password}
                                                        onChange={onPasswordChange}
                                                    />
                                               </Card> 
                                            </form>
                                            <div>
                                                <Button onClick={ () =>{ this.setState({ login:false})}}>
                                                    Register
                                                </Button>
                                            </div>    
                                        </div>
                                    :
                                    <div className='app-flexColumn'>
                                        <h1 className='app-center'>Register</h1>
                                            <form className='app-flexColumn app-center'>
                                            <Card>
                                                <TextField 
                                                    name='username'
                                                    floatingLabelText="Username"
                                                    value={email}
                                                    onChange={onEmailChange}
                                                    errorText={registerErrorEmail}
                                                />
                                            
                                                <TextField 
                                                    name='password'
                                                    floatingLabelText="Password"
                                                    value={password}
                                                    onChange={onPasswordChange}
                                                    errorText={registerErrorPassword}
                                                />
                                            </Card>                                        
                                            </form>
                                            <div>
                                                <Button onClick={ () =>{ this.setState({ login:true})}}>
                                                    Go back to login
                                                </Button>
                                            </div>  
                                    </div>
        
        return(
            
            <Dialog
                modal={false}
                actions={actions}
                open={ dialogVisible }
                onRequestClose={ dialogToggle }
                contentClassName='app-dialogContent'
                paperClassName='app-dialogPaper' >
               
                {View}

            </Dialog>

        );
    }
}

export default LoginDialog