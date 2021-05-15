const getDocuments = () => {
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
};
