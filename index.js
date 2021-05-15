// console.log("hello");

const inputElement = document.querySelector("#inputAmount");
const element = document.querySelector("#btnAddExpense");
const headingEl = document.querySelector("#headingTotal");
const inputDescEl = document.querySelector("#inputDesc");
const expenseTableEl = document.querySelector("#expenseTable");
const alertEl = document.querySelector("#alert");

let totalExpense = 0;

headingEl.textContent = totalExpense;

const addExpenseToTotal = () => {
  const expenseItem = {};
  const textAmount = inputElement.value;
  const textDesc = inputDescEl.value;

  const expense = parseInt(textAmount, 10);

  expenseItem.desc = textDesc;
  expenseItem.amount = expense;
  expenseItem.moment = new Date();
  if (expense !== NaN) {
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

  totalExpense = totalExpense + expense;
  const someText = `Total: ${totalExpense}`;

  headingEl.textContent = someText;
  //   renderList(allExpenses);
};

// Control functions
const getDateString = (momento) => {
  return momento.toDate().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

function deleteItem(docId) {
  //   console.log("delete", docId);
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

const renderList = (arrOfList) => {
  //   console.log(arrOfList);
  const allExpenseHTML = arrOfList.map((expense) => createListItem(expense));
  const joinedAllExpenseHTML = allExpenseHTML.join("");
  expenseTableEl.innerHTML = joinedAllExpenseHTML;
};
// renderList(allExpenses);
element.addEventListener("click", addExpenseToTotal, false);
getDocuments();

// View layer
const createListItem = ({ desc, amount, createdAt, docId }) => {
  //   console.log(docId);
  return `
      <li class="list-group-item d-flex justify-content-between">
      <div class="d-flex flex-column">
      ${desc}
          <small class="text-muted">${getDateString(createdAt)}</small>
      </div>
      <div>
          <span class="px-5">
          ${amount}
          </span>
          <button 
            type="button" 
            class="btn btn-outline-danger btn-sm"
            onClick="deleteItem('${docId}')"
          >
            <i class="fas fa-trash"></i>
          </button>
      </div>
    </li>
      `;
};
