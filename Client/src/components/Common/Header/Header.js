
import React, { Component }     from 'react';
import { connect }              from 'react-redux';
import { emailChanged, passwordChanged, loginUser, registerUser } from'../../../Reducers';
import {withRouter} from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button} from '@material-ui/core'
import LoginDialog from './loginDialog'



 class Header extends Component{ 
    constructor(props){
        super(props);
        this.state={
            redirect: false,
            dialogVisible: false,
            registerErrorEmail: '',
            registerErrorPassword: '',
         };
         this.titleClick = this.titleClick.bind(this)
         this.dialogToggle = this.dialogToggle.bind(this)
         this.onEmailChange = this.onEmailChange.bind(this)
         this.onPasswordChange = this.onPasswordChange.bind(this)
         this.loginButtonPress = this.loginButtonPress.bind(this)
         this.registerButtonPress = this.registerButtonPress.bind(this)
    }

dialogToggle() {
    this.setState({
        dialogVisible:!this.state.dialogVisible
})
}
titleClick() {
    this.props.history.push('/')
}
onEmailChange(e) {
    this.props.emailChanged(e.target.value);
}

onPasswordChange(e) {
    this.props.passwordChanged(e.target.value);
}

loginButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser( email, password );
}
registerButtonPress() {
    const { email, password } = this.props;
   
    // if( registerEmailError === '' && registerPasswordError === "") {
    //     this.props.registerUser(email, password);
    // }
    
    this.props.registerUser( email, password ); 
}

    render() {

        // const loginButton = (this.props.user === null)?
        //     <Button label="LogIn" onClick={this.dialogToggle} /> 
        //     :
        //     <Button label="LogOut" onClick={this.login}/>

        const titleBar = <AppBar className='appBar' position="fixed">
                            <Toolbar className='toolBar'>
                                
                                    <Typography variant="h5" onClick={this.titleClick}>
                                        MovieDB
                                    </Typography>
                                   
                                    <Button variant="contained" onClick={this.dialogToggle}>
                                        Default
                                    </Button>
                                
                            </Toolbar>
                            </AppBar>
        //<AppBar 
        //                     // title="IMDB"
        //                     className='header'
        //                     // onTitleClick={this.titleClick}
        //                     // showMenuIconButton={false}
        //                     zDepth={1}
        //                     // children={this.props.children}  
        //                     // position="fixed"
        //                     // iconElementRight={(this.props.user === null)?<Button label="LogIn" onClick={this.dialogToggle} /> : <Button label="LogOut" onClick={this.login} /> } 
        //                 >
        //                     Helllo
        //                 </ AppBar>
    
        return(
            <div>
               {titleBar}
               
               <LoginDialog 
                    error={this.props.error}
                    registerErrorEmail={this.state.registerErrorEmail}
                    registerErrorPassword={this.state.registerErrorPassword}
                    dialogToggle={this.dialogToggle} 
                    dialogVisible={this.state.dialogVisible} 
                    onEmailChange={this.onEmailChange}
                    email={this.props.email}
                    onPasswordChange={this.onPasswordChange}
                    password={this.props.password}
                    loginButtonPress={this.loginButtonPress}
                    registerButtonPress={this.registerButtonPress}
                />
            </div>

        );
    }
}
const mapStateToProps = state => {
    const user = state.auth.user;
    const email = state.auth.email;
    const password = state.auth.password;
    const error = state.auth.error;
    const success = state.auth.success;
    const registerError = state.auth.registerError;
    const loading = state.auth.loading;
    const registerEmailError = state.auth.registerEmailError;
    const registerPasswordError = state.auth.registerPasswordError;

        return{ user, email, password, error, success, registerError, loading, registerEmailError, registerPasswordError };
}

const mapDispatchToProps = (dispatch) => {
    return{
        emailChanged:(text) => dispatch(emailChanged(text)), 
        passwordChanged:(text) => dispatch(passwordChanged(text)),
        loginUser:(email, password) => dispatch(loginUser(email, password)),
        registerUser:(email, password) => dispatch(registerUser(email, password)),   
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps )(Header))