let container = document.querySelector(".container");
let income = document.querySelector(".topgincome");
let expenses = document.querySelector(".topgexpenses");
let balance = document.querySelector(".cash");

let totalincome = 0;
let totalexpenses = 0;

let additem = document.getElementById("additem");
let amountitem = document.getElementById("amountitem");
const btn = document.querySelector(".btn");
let transaction = document.querySelector(".transaction");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let newItem = document.createElement("div");
  newItem.classList.add("item");
  let description = document.createElement("p");
  let amount = document.createElement("div");
  amount.classList.add("earning");
  description.textContent = additem.value;
  description.classList.add("description");
  if (amountitem.value > 0) {
    amount.textContent = "+" + amountitem.value;
    newItem.classList.add("income");
    totalincome += parseFloat(amountitem.value);
    income.textContent = "$" + totalincome;
  } else {
    amount.textContent = amountitem.value;
    newItem.classList.add("expenses");
    totalexpenses += parseFloat(amountitem.value);
    expenses.textContent = "$" + Math.abs(totalexpenses);
  }
  newItem.appendChild(description);
  newItem.appendChild(amount);
  transaction.appendChild(newItem);
  balance.textContent = "$" + (parseFloat(totalincome) + parseFloat(totalexpenses)).toFixed(2);
  saveData();
});

function saveData() {
  // Save transactions, total income, total expenses, and balance to localStorage
  localStorage.setItem("transaction", transaction.innerHTML);
  localStorage.setItem("totalincome", totalincome);
  localStorage.setItem("totalexpenses", totalexpenses);
  localStorage.setItem("balance", totalincome + totalexpenses);
}

function showTask() {
  transaction.innerHTML = localStorage.getItem("transaction");
  totalincome = parseFloat(localStorage.getItem("totalincome")) || 0;
  totalexpenses = parseFloat(localStorage.getItem("totalexpenses")) || 0;
  income.textContent = "$" + totalincome;
  expenses.textContent = "$" + Math.abs(totalexpenses);
  balance.textContent = "$" + (totalincome + totalexpenses).toFixed(2);
}

let resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", () => {
  localStorage.clear();
  income.textContent = "$0";
  expenses.textContent = "$0";
  balance.textContent = "$0";
  transaction.innerHTML = "";
  totalincome = 0;
  totalexpenses = 0;
});

showTask();
