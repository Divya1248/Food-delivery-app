import firebase from 'firebase';
import 'firebase/auth'
// import 'firebase/database'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyD3suaT4CrAIO42xd7kzTQi77ERL8j7UdY",
  authDomain: "food-delivery-site-bbb53.firebaseapp.com",
  projectId: "food-delivery-site-bbb53",
  storageBucket: "food-delivery-site-bbb53.appspot.com",
  messagingSenderId: "136028119227",
  appId: "1:136028119227:web:ae6438ec305c32ccf3899e",
  measurementId: "G-BCGYMCYZWY",
};
firebase.initializeApp(firebaseConfig);
export default firebase;
