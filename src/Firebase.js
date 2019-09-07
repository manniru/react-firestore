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

firebase.firestore().enablePersistence()
  .catch(function(err) {
      if (err.code == 'failed-precondition') {
          console.log('failed-precondition')
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code == 'unimplemented') {
          console.log('unimplemented')
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });
// Subsequent queries will use persistence, if it was enabled successfullytest.firestore.js

  

export default firebase;