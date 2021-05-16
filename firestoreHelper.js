function getDocuments() {
  db.collection("expenses")
    .orderBy("createdAt", "desc")
    .onSnapshot((snap) => {
      let documents = [];
      snap.forEach((doc) => {
        // console.log(doc.id);
        if (doc.id === "total") {
          // console.log(doc.id);
          headingEl.textContent = "Expense: " + doc.data().total;
        } else {
          documents.push({
            ...doc.data(),
            docId: doc.id,
          });
        }

        //   console.log(documents);
        renderList(documents);
      });
    });
}

function deleteFromFirebase(docId, expense) {
  db.collection("expenses")
    .doc(docId)
    .delete()
    .then(() => {
      // console.log("Document successfully deleted!");
    })
    .catch((error) => {
      console.error("Error removing document: ", error);
    });
  db.collection("expenses")
    .doc("total")
    .update({
      total: firebase.firestore.FieldValue.increment(-expense),
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
      // console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  db.collection("expenses")
    .doc("total")
    .update({
      total: firebase.firestore.FieldValue.increment(expense),
    });
}
