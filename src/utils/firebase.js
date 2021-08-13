import firebase from "firebase/app"
import "firebase/firestore"

const config = {

    apiKey: "AIzaSyCszeBA6GkkE9rZXOAcQVepRVVhsuHFhEc",
  
    authDomain: "es-sw-rp-dmp.firebaseapp.com",
  
    projectId: "es-sw-rp-dmp",
  
    storageBucket: "es-sw-rp-dmp.appspot.com",
  
    messagingSenderId: "564819919969",
  
    appId: "1:564819919969:web:9a4e182ca5a958fbe71620",
  
    measurementId: "G-K7TS42GV0H"
  
  }
  
  
if (!firebase.apps.length){
    firebase.initializeApp(config)
}

const firestore = firebase.firestore()

export { firestore }