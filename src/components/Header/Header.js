
import React, { Component }     from 'react';
import { connect }              from 'react-redux';
import { emailChanged, passwordChanged, toggleModal, loginUser, registerUser, signOutUser } from'../../Reducers';
import {withRouter} from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button} from '@material-ui/core'
import LoginDialog from './loginDialog'
import './header.scss'



 class Header extends Component{ 
    constructor(props){
        super(props);
        this.state={
            redirect: false,
            dialogVisible: false,
            registerErrorEmail: '',
            registerErrorPassword: '',
         };
         this.signOut = this.signOut.bind(this)
         this.titleClick = this.titleClick.bind(this)
         this.dialogToggle = this.dialogToggle.bind(this)
         this.onEmailChange = this.onEmailChange.bind(this)
         this.onPasswordChange = this.onPasswordChange.bind(this)
         this.loginButtonPress = this.loginButtonPress.bind(this)
         this.registerButtonPress = this.registerButtonPress.bind(this)
    }

dialogToggle(data) {
    console.log(data)
    this.props.toggleModal(data)
}
signOut(){
    this.props.signOutUser()
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
   
    this.props.registerUser( email, password ); 
}

    render() {

        const titleBar = <AppBar className='appBar' position="fixed">
                            <Toolbar className='toolBar'>
                                
                                    <Typography variant="h5" onClick={this.titleClick}>
                                        MovieDB
                                    </Typography>
                                   
                                   { (this.props.user === '')?
                                        <Button variant="contained" label="LogIn" onClick={() => {this.dialogToggle(true)} } >
                                            Login
                                        </Button> 
                                        :
                                        <Button variant="contained" label="LogOut" onClick={this.signOut}>
                                            LogOut
                                        </Button> 
                                    }
                                
                            </Toolbar>
                            </AppBar>
      
    
        return(
            <div>
               {titleBar}
               
               <LoginDialog 
                    loginError={this.props.loginError}
                    registerError={this.props.registerError}
                    dialogToggle={this.dialogToggle} 
                    dialogVisible={this.props.loginModalOpen} 
                    onEmailChange={this.onEmailChange}
                    email={this.props.email}
                    onPasswordChange={this.onPasswordChange}
                    password={this.props.password}
                    loginButtonPress={this.loginButtonPress}
                    registerButtonPress={this.registerButtonPress}
                    loginDisplay ={ this.props.loginDisplay }
                />
            </div>

        );
    }
}
const mapStateToProps = state => {
    const user = state.auth.user;
    const email = state.auth.email;
    const password = state.auth.password;
    const loginError = state.auth.loginError;
    const success = state.auth.success;
    const registerError = state.auth.registerError;
    const loading = state.auth.loading;
    const loginDisplay= state.auth.loginDisplay;
    const loginModalOpen = state.auth.loginModalOpen

        return{ user, email, password, loginError, success, registerError, loading, loginDisplay, loginModalOpen };
}

const mapDispatchToProps = (dispatch) => {
    return{
        signOutUser:() => dispatch(signOutUser( )),   
        toggleModal: (data) => dispatch(toggleModal(data)),
        emailChanged:(text) => dispatch(emailChanged(text)), 
        passwordChanged:(text) => dispatch(passwordChanged(text)),
        loginUser:(email, password) => dispatch(loginUser(email, password)),
        registerUser:(email, password) => dispatch(registerUser(email, password)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps )(Header))