import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBPEaGEPXW6rV_FzM-ZZAhSxgrjlO9H8SQ",
    authDomain: "burger-shop-851d5.firebaseapp.com",
    databaseURL: "https://burger-shop-851d5-default-rtdb.europe-west1.firebasedatabase.app",
})

const base = Rebase.createClass(firebaseApp())

export { firebaseApp }

export default base