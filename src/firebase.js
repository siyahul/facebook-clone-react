import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDH9IV0ty95YbaK0vc22aw0mxPafvZhVEA",
    authDomain: "facebook-haq.firebaseapp.com",
    databaseURL: "https://facebook-haq.firebaseio.com",
    projectId: "facebook-haq",
    storageBucket: "facebook-haq.appspot.com",
    messagingSenderId: "1018352465815",
    appId: "1:1018352465815:web:c90e9cb3f932e54fea76d2",
    measurementId: "G-LMZXDJBRBB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth , provider};
  export default db;