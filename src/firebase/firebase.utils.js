import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCYt1VnbbKGHCHNLHx8mmhub5nfjnSygsw',
  authDomain: 'crwn-db-196ea.firebaseapp.com',
  databaseURL: 'https://crwn-db-196ea.firebaseio.com',
  projectId: 'crwn-db-196ea',
  storageBucket: 'crwn-db-196ea.appspot.com',
  messagingSenderId: '432142420144',
  appId: '1:432142420144:web:00c3af4ddcf17f09d51375'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
