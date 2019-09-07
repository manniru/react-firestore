import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: process.env.APIKEY,
    authDomain: "collegemis.firebaseapp.com",
    databaseURL: "https://collegemis.firebaseio.com",
    projectId: "collegemis",
    storageBucket: "collegemis.appspot.com",
    messagingSenderId: process.env.MESSAGING_ID,
    appId: process.env.APPID
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;