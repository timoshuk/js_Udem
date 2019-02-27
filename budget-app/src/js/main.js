let splitUp = document.getElementById("start");
let valueData = document.querySelectorAll(".result-table div[class$='-value']");
let expensesValue = valueData[3];
let expensesItem = document.querySelectorAll(".expenses-item");
let btn = document.getElementsByTagName("button");
let approve = btn[0];
let approve2 = btn[1];
let calculate = btn[2];
let optionalexpensesItem = document.querySelectorAll(".optionalexpenses-item");
let chooseIncome = document.querySelector(".choose-income");
let savings = document.querySelector("#savings");
let sum = document.querySelector("#sum");
let percent = document.querySelector("#percent");
let timeData = document.querySelectorAll(".time-data [class$='-value']");
let yearValue = timeData[0];
let monthValue = timeData[1];
let dayValue = timeData[2];

let appData = {
  budget: 0,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: "",
  savings: true
};

// Events

splitUp.addEventListener("click", function() {
  let money = +prompt("Ваш бюджет на місяць", "");
  let time = prompt("Введіть дату в форматі YYYY-MM-DD", "");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на місяць", "");
  }
  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed();
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(time)).getDate();
});

// ================================

approve.addEventListener("click", function() {
  let sum = 0;

  for (let i = 0; i < expensesItem.length; i++) {
    let a = expensesItem[i].value;
    let b = expensesItem[++i].value;

    if (typeof a != null && typeof b != null && a != "" && b != "") {
      appData.expenses[a] = b;
      sum += +b;
    } else {
      i -= 1;
    }
  }

  expensesValue.textContent = sum;
});
