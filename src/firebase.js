import firebase from 'firebase/app';
import 'firebase/firestore'; 

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAWoiuPg_2_l_-fs4_uxCwYai_aEPJ1vkw",
    authDomain: "release-studio-fr.firebaseapp.com",
    databaseURL: "https://release-studio-fr.firebaseio.com",
    projectId: "release-studio-fr",
    storageBucket: "release-studio-fr.appspot.com",
    messagingSenderId: "1059558044826",
    appId: "1:1059558044826:web:39dd0f78b174dd31fadb23",
    measurementId: "G-11CMYQ1VFZ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;