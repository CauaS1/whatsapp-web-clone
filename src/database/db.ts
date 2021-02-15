import firebase from 'firebase';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyDo5H6g32mPsVkQzNVC8R280mj77SqT3-Y",
  authDomain: "whatsapp-93372.firebaseapp.com",
  projectId: "whatsapp-93372",
});

export var db = firebase.firestore();