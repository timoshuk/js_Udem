// 34 хвилин

let splitUp = document.getElementById("start");
let valueData = document.querySelectorAll(".result-table div[class$='-value']");
let budgetValue = valueData[0];
let dayBudgetValue = valueData[1];
let levelValue = valueData[2];
let expensesValue = valueData[3];
let optionalExpensesValue = valueData[4];
let incomeValue = valueData[5];
let monthSevings = valueData[6];
let yearSevings = valueData[7];
let expensesItem = document.querySelectorAll(".expenses-item");
let btn = document.getElementsByTagName("button");
let approve = btn[0];
let optionalExpensesBtn = btn[1];
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
  budget: undefined,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: undefined,
  savings: false,
  moneyPerDay: undefined,
  monthIncome: undefined,
  yearIncome: undefined
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

  [].forEach.call(btn, function(item) {
    item.disabled = false;
  });
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

// ================================================

optionalExpensesBtn.addEventListener("click", function() {
  for (let i = 0; i < optionalexpensesItem.length; i++) {
    let answer = optionalexpensesItem[i].value;
    appData.optionalExpenses[i] = answer;
    optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";
  }
});

// ==========================================

calculate.addEventListener("click", function() {
  let trt = 0;
  for (key in appData.expenses) {
    trt += +appData.expenses[key];

    console.log(trt);
  }

  if (appData.budget != undefined) {
    appData.moneyPerDay = ((appData.budget - trt) / 30).toFixed();
    dayBudgetValue.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
      levelValue.textContent = "Мінімальний Рівень достатку";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      levelValue.textContent = "Середній Рівень достатку";
    } else if (appData.moneyPerDay > 2000) {
      levelValue.textContent = "Високий Рівень достатку";
    } else {
      levelValue.textContent = "Виникла помилка";
    }
  } else {
    dayBudgetValue.textContent = "Ви не вказали бюджет на місяць";
  }
});

// ===========================================

chooseIncome.addEventListener("input", function() {
  let items = this.value;
  appData.income = items.split(", ");
  incomeValue.textContent = appData.income;
});

// =========================================

savings.addEventListener("click", function() {
  appData.savings ? (appData.savings = false) : (appData.savings = true);
});

// ==========================================
sum.addEventListener("input", function() {
  if (appData.savings) {
    let sm = +sum.value;
    let pr = +percent.value;
    appData.monthIncome = (sm / 100 / 12) * pr;
    appData.yearIncome = (sm / 100) * pr;

    monthSevings.textContent = appData.monthIncome.toFixed(1);
    yearSevings.textContent = appData.yearIncome.toFixed(1);
  }
});

// ==============================================

percent.addEventListener("input", function() {
  if (appData.savings) {
    let sm = +sum.value;
    let pr = +percent.value;
    appData.monthIncome = (sm / 100 / 12) * pr;
    appData.yearIncome = (sm / 100) * pr;

    monthSevings.textContent = appData.monthIncome.toFixed(1);
    yearSevings.textContent = appData.yearIncome.toFixed(1);
  }
});
