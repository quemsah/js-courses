// Получить кнопку "Начать расчет" через id
let startBtn = document.getElementById("start");

//  Получить все блоки в правой части программы через классы
// (которые имеют класс название-value)
let budgetValue = document.getElementsByClassName("budget-value")[0],
    daybudgetValue = document.getElementsByClassName("daybudget-value")[0],
    levelValue = document.getElementsByClassName("level-value")[0],
    expensesValue = document.getElementsByClassName("expenses-value")[0],
    optionalExpensesValue = document.getElementsByClassName(
        "optionalexpenses-value"
    )[0],
    incomeValue = document.getElementsByClassName("income-value")[0],
    monthsavingsValue = document.getElementsByClassName("monthsavings-value")[0],
    yearsavingsValue = document.getElementsByClassName("yearsavings-value")[0];

// Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)
let expensesItem = document.getElementsByClassName("expenses-item");

// Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной.
let expensesBtn = document.getElementsByTagName("button")[0],
    optionalExpensesBtn = document.getElementsByTagName("button")[1],
    countBtn = document.getElementsByTagName("button")[2];

// Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
let optExpensesItem = document.querySelectorAll(".optionalexpenses-item");

// Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
let income = document.querySelector(".choose-income"),
    haveSavings = document.querySelector("#savings"),
    sumValue = document.querySelector("#sum"),
    percentValue = document.querySelector("#percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");

let money, time;

startBtn.addEventListener("click", () => {
    time = prompt(
        "Введите дату в формате YYYY-MM-DD",
        new Date().toISOString().slice(0, 10)
    );
    money = +prompt("Ваш бюджет на месяц?", "");
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed(2);
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
    //активируем остальные кнопки
    expensesBtn.removeAttribute("disabled");
    optionalExpensesBtn.removeAttribute("disabled");
    countBtn.removeAttribute("disabled");
});

expensesBtn.addEventListener("click", () => {
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value;
        let b = expensesItem[++i].value;
        if (
            typeof a === "string" &&
            typeof a != null &&
            typeof b != null &&
            a != "" &&
            b != "" &&
            a.length < 50
        ) {
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i--;
        }
    }
    appData.totalExpenses = sum;
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener("click", () => {
    let i = 0;
    do {
        let opt = optExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";
        i++;
    } while (i < optExpensesItem.length);
});

countBtn.addEventListener("click", () => {
    if (appData.budget) {
        appData.modeyPerDay = (
            (appData.budget - appData.totalExpenses) /
            30
        ).toFixed(2);
        daybudgetValue.textContent = appData.modeyPerDay;
        if (appData.modeyPerDay < 100) {
            levelValue.textContent = "Не очень.";
        } else if (appData.modeyPerDay > 100 && appData.modeyPerDay < 2000) {
            levelValue.textContent = "Средненько...";
        } else if (appData.modeyPerDay > 2000) {
            levelValue.textContent = "Неплохо!";
        } else {
            levelValue.textContent = "Что-то пошло не так!";
        }
    } else {
        daybudgetValue.textContent = "Сперва начни расчет, юнец";
    }
});

income.addEventListener("change", () => {
    let items = income.value;
    if (typeof items === "string" && items != "" && typeof items != null) {
        appData.income = items.split(", ");
    }
    incomeValue.textContent = appData.income;
});

haveSavings.addEventListener("click", () => {
    if (appData.savings) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener("input", () => {
    if (appData.savings) {
        let sum = +sumValue.value;
        let percent = +percentValue.value;
        appData.monthIncome = ((sum / 100 / 12) * percent).toFixed(2);
        appData.yearIncome = ((sum / 100) * percent).toFixed(2);
        monthsavingsValue.textContent = appData.monthIncome;
        yearsavingsValue.textContent = appData.yearIncome;
    }
});

percentValue.addEventListener("input", () => {
    if (appData.savings) {
        let sum = +sumValue.value;
        let percent = +percentValue.value;
        appData.monthIncome = ((sum / 100 / 12) * percent).toFixed(2);
        appData.yearIncome = ((sum / 100) * percent).toFixed(2);
        monthsavingsValue.textContent = appData.monthIncome;
        yearsavingsValue.textContent = appData.yearIncome;
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};