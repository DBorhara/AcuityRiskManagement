import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'acuityrisk.firebaseapp.com',
  databaseURL: 'https://acuityrisk.firebaseio.com',
  projectId: 'acuityrisk',
  storageBucket: 'acuityrisk.appspot.com',
  messagingSenderId: '773537591164',
  appId: '1:773537591164:web:5f0b335b4c24df1a207ef9',
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const db = firebase.database();

export { db, storage, firebase as default };
