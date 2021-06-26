import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAmUEQjVElV-lSFm0qbUMZECm3wbUjdRek",
    authDomain: "crwn-app-e612f.firebaseapp.com",
    projectId: "crwn-app-e612f",
    storageBucket: "crwn-app-e612f.appspot.com",
    messagingSenderId: "243108666500",
    appId: "1:243108666500:web:d9c1aa5251957a0ce1b6d1"
};

firebase.initializeApp(config);


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGooge = () => firebase.auth().signInWithPopup(provider);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


export default firebase;