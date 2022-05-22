import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


      firebase.initializeApp({
  
       apiKey: "AIzaSyBvZZJZm5yey0YfUUGOHD_UFiK8Ov5rUU4",
        authDomain: "clone-ead78.firebaseapp.com",
        projectId: "clone-ead78",
        storageBucket: "clone-ead78.appspot.com",
        messagingSenderId: "401244617721",
        appId: "1:401244617721:web:a908d2cc59a5469ba75b28",
        measurementId: "G-C1NEDMW5Z3"
    
})


const auth = firebase.auth();

  export { auth };
  