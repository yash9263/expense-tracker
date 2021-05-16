function createUser(username, email, password) {
  console.log(email, password, username);
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
      console.log(user);
      user
        .updateProfile({
          displayName: username,
        })
        .then(() => {
          const useruid = userCredential.user.uid;
          firebase.firestore().collection("accounts").doc(useruid).set({
            name: userCredential.user.displayName,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          });
        });
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
}

function loginUser(email, password) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
      console.log(user);
      location.assign("./index.html");
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
}
