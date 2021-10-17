import Rebase from 're-base'
import firebase from 'firebase/app'
require('firebase/database')

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBPEaGEPXW6rV_FzM-ZZAhSxgrjlO9H8SQ",
    authDomain: "burger-shop-851d5.firebaseapp.com",
    databaseURL: "https://burger-shop-851d5-default-rtdb.europe-west1.firebasedatabase.app"
})

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }

export default base