import firebase from 'firebase/app'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAT7pnaFTYsiBfac7ehGjgrnc9tqnYp3fU",
    authDomain: "t-shirt-design-ad06b.firebaseapp.com",
    projectId: "t-shirt-design-ad06b",
    storageBucket: "t-shirt-design-ad06b.appspot.com",
    messagingSenderId: "312038715087",
    appId: "1:312038715087:web:0559234922289ab92591ba",
    measurementId: "G-5N6FBRJ097"
  };
  firebase.initializeApp(firebaseConfig);
    const storage = firebase .storage()
export {
      storage, firebase as default
  }