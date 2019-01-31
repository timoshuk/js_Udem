"use strict";

let money = +prompt("Ваш Бюджет на неделю", "0"),
  time = prompt("Введите дату в формате YYYY-MM-DD", "2019-01-01");

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

for (let i = 0; i < 2; i++) {
  let question = prompt(
    "Введите обязательную статью расходов в этом месяце",
    ""
  );
  let answer = +prompt("Во сколько обойдется", "");

  if (
    question != "" &&
    typeof question != null &&
    answer != "" &&
    typeof answer != null &&
    !isNaN(answer)
  ) {
    appData.expenses[`${question}`] = answer;
  } else {
    i = i - 1;
  }
}

let calculate = money / 7;

alert(`Ваш бюджет на день становить ${calculate}грн`);
