function getDocuments() {
  db.collection("expenses").onSnapshot((snap) => {
    let documents = [];
    snap.forEach((doc) => {
      documents.push({
        ...doc.data(),
        docId: doc.id,
      });

      //   console.log(documents);
      renderList(documents);
    });
  });
}

function deleteFromFirebase(docId) {
  db.collection("expenses")
    .doc(docId)
    .delete()
    .then(() => {
      console.log("Document successfully deleted!");
    })
    .catch((error) => {
      console.error("Error removing document: ", error);
    });
}

function addExpenseOnFirestore(textDesc, expense) {
  db.collection("expenses")
    .add({
      desc: textDesc,
      amount: expense,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
}
