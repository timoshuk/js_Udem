"use strict";
let money, time;
let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};


detectDayBudget();
detectLevel();

function detectDayBudget(){
  money = +prompt("Ваш Бюджет на неделю", "0");
  time = prompt("Введите дату в формате YYYY-MM-DD", "2019-01-01");

}
// ==============================

function detectLevel(){
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
  
  let calculate = (money / 7).toFixed(2);
  
  alert(`Ваш бюджет на день становить ${calculate}грн`);
}
// ===========================================
let optionalExpenses = {};

function chooseOptExpenses(){
  for(let i = 0; i < 3; i++){
    let answer = prompt('Статья необязательных расходов?');
    if(  answer != "" &&
    typeof answer != null &&
    !isNaN(answer)){
      optionalExpenses[`${i+1}`] = answer;
    }
  }

  console.log(optionalExpenses);

}
chooseOptExpenses();

// ===========================================



