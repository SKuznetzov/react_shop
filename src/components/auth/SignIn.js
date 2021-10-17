import React, { Component } from 'react'
import Login from './Login'
import firebase from 'firebase/app'
import { firebaseApp } from '../../base'

export default class SignIn extends Component {
    state = {
        user: ''
    }
    render() {
        return this.props.children
    }
}
