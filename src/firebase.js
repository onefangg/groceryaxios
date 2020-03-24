import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAU6sVQgHSNDUcpVj09lNk_Xgk64MHPgwU",
  authDomain: "fir-tutorial-956e6.firebaseapp.com",
  databaseURL: "https://fir-tutorial-956e6.firebaseio.com",
  projectId: "fir-tutorial-956e6",
  storageBucket: "fir-tutorial-956e6.appspot.com",
  messagingSenderId: "906798547636",
  appId: "1:906798547636:web:9dfd1eaadbdb19d6484de1",
  measurementId: "G-2DMWW04MS3"

  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;