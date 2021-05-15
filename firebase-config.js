var firebaseConfig = {
  apiKey: "AIzaSyDq0i_xVtNMibwMrKYyj26UBMko1Amwcu4",
  authDomain: "expense-tracker-7d13c.firebaseapp.com",
  projectId: "expense-tracker-7d13c",
  storageBucket: "expense-tracker-7d13c.appspot.com",
  messagingSenderId: "619828757091",
  appId: "1:619828757091:web:b11ada5d030cb91230ee56",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// console.log(firebase.app());

const db = firebase.firestore();
