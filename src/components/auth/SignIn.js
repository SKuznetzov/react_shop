import React, { Component } from 'react'
import Login from './Login'
import firebase from 'firebase/app'
import { firebaseApp } from '../../base'

export default class SignIn extends Component {
    state = {
        user: ''
    }

    authHandler = async authData =>{
        console.log(authData)
    }
    authenticate = ()=>{
        const authProvider = new firebase.auth['GithubAuthProvider']()
        firebaseApp.auth()
        .signInWithPopup(authProvider)
        .then(this.authHandler)
    }
    render() {
        if (!this.state.user){
            return <Login authenticate={this.authenticate} />
        }
        return this.props.children
    }
}
