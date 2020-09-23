import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'acuity-website-74227.firebaseapp.com',
  databaseURL: 'https://acuity-website-74227.firebaseio.com',
  projectId: 'acuity-website-74227',
  storageBucket: 'acuity-website-74227.appspot.com',
  messagingSenderId: '411912877767',
  appId: '1:411912877767:web:b87d308340c61216bf70e2',
};

firebase.initializeApp(firebaseConfig);

//Firebase Tools
const storage = firebase.storage();
const db = firebase.database();

export { db, storage, firebase as default };
