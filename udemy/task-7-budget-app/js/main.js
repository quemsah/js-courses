// Получить кнопку "Начать расчет" через id
let startBtn = document.getElementById('start');

//  Получить все блоки в правой части программы через классы
// (которые имеют класс название-value)
let budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0];

// Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)
let expensesItem = document.getElementsByClassName('expenses-item');

// Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной.
let allBtns = document.getElementsByTagName('button');
let expensesBtn = allBtns[0],
    optionalExpensesBtn = allBtns[1],
    countBtn = allBtns[2];

// Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
let optExpensesItem = document.querySelectorAll('.optionalexpenses-item');

// Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
let income = document.querySelector('.choose-income'),
    haveSavings = document.querySelector('#savings'),
    sum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

startBtn.addEventListener('click', () => {
    time = prompt('Введите дату в формате YYYY-MM-DD', new Date().toISOString().slice(0, 10));
    money = +prompt('Ваш бюджет на месяц?', '');
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '')
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed(2);
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value;
        let b = expensesItem[++i].value;
        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i--;
        }
    }
    expensesValue.textContent = sum;
})

optionalExpensesBtn.addEventListener('click', function () {
    let i = 0;
    do {
        let opt = optExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
        i++;
    } while (i < optExpensesItem.length)
})

countBtn.addEventListener('click', function () {
    if (appData.budget) {
        appData.modeyPerDay = (appData.budget / 30).toFixed(2);
        daybudgetValue.textContent = appData.modeyPerDay;
        if (appData.modeyPerDay < 100) {
            levelValue.textContent = 'Не очень.';
        } else if (appData.modeyPerDay > 100 && appData.modeyPerDay < 2000) {
            levelValue.textContent = 'Средненько...';
        } else if (appData.modeyPerDay > 2000) {
            levelValue.textContent = 'Неплохо!';
        } else {
            levelValue.textContent = 'Что-то пошло не так!';
        }
    } else {
        daybudgetValue.textContent = "Сперва начни расчет, юнец";
    }
})

income.addEventListener('change', function () {
    let items = income.value;
    if ((typeof (items)) === 'string' && items != '' && (typeof (items)) != null) {
        appData.income = items.split(', ');
    }
    incomeValue.textContent = appData.income;
})
//
haveSavings.addEventListener('change', function () {
})

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: () => {
        let i = 0;
        do {
            i++;
            let a = prompt('Введите обязательную статью расходов в этом месяце', '');
            let b = +prompt('Во сколько обойдется?', '');
            if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
                console.log('Done!');
                appData.expenses[a] = b
            } else {
                i--
            }
        } while (i < 2)
    },
    detectDayBudget: () => {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма твоих накоплений?");
            let percent = +prompt("Под какой процент?");
            appData.monthIncome = (save / 100 / 12 * percent).toFixed(2);
            alert("Доход в месяц с твоего депозита: " + appData.monthIncome);
        }
    },
    checkSavings: () => {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма твоих накоплений?");
            let percent = +prompt("Под какой процент?");
            appData.monthIncome = (save / 100 / 12 * percent).toFixed(2);
            alert("Доход в месяц с твоего депозита: " + appData.monthIncome);
        }
    }
};
//appData.chooseIncome();
//вывести всё
for (let item in appData) {
    console.log("appData." + item + " = " + appData[item]);
}