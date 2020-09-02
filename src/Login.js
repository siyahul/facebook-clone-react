import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import {auth,provider} from './firebase.js'
import {actionTypes} from './reducer'
import {useStateValue} from './StateProvide.js'

function Login() {
    const [state,dispatch] = useStateValue();
    const signIn =()=>{
        auth.signInWithPopup(provider)
        .then(result =>{
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch((error)=> alert(error.message));
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://i.pinimg.com/originals/58/f4/72/58f4723d8f23906bdcb058604075ad2a.png" alt=""
                />
                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt=""
                />
            </div>
            <Button type="submit" onClick={signIn}>
            Sign In    
            </Button> 
        </div>
    )
}

export default Login
