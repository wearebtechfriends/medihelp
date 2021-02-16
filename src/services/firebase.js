import * as firebase from 'firebase';

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyD8gnHz-kD0w-QyVTAE4uDqxJbpp4FeUMo",
    authDomain: "medihelp-d8824.firebaseapp.com",
    projectId: "medihelp-d8824",
    storageBucket: "medihelp-d8824.appspot.com",
    messagingSenderId: "523651613303",
    appId: "1:523651613303:web:e51be09ef70a5ccd5bbc72",
    measurementId: "G-83H0JBJXD3"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;