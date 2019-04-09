let money, time;

(() => {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', new Date().toISOString().slice(0, 10));
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '')
    }
})();

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
        appData.modeyPerDay = (appData.budget / 30).toFixed(2);
        console.log('Ежедневный бюджет: ' + appData.modeyPerDay);
    },
    detectDayBudget: () => {
        if (appData.modeyPerDay < 100) {
            console.log('Не очень.')
        } else if (appData.modeyPerDay > 100 && appData.modeyPerDay < 2000) {
            console.log('Средненько...')
        } else if (appData.modeyPerDay > 2000) {
            console.log('Неплохо!')
        } else {
            console.log('Что-то пошло не так!')
        }
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
    },
    chooseOptExpenses: () => {
        let i = 0;
        do {
            i++;
            5000
            let a = prompt('Введите необязательную статью расходов в этом месяце', '');
            if ((typeof (a)) === 'string' && (typeof (a)) != null && a != '' && a.length < 50) {
                console.log('Done!');
                appData.optionalExpenses[i] = a;
            } else {
                i--;
            }
        } while (i < 3)
    },
    chooseIncome: () => {
        let items = prompt("Что принесет доп. доход? (Перечисли через запятую)", "");
        if ((typeof (items)) === 'string' && items != '' && (typeof (items)) != null) {
            appData.income = items.split(', ');
            appData.income.sort();
            appData.income.forEach(function (item, i556, income) {
                console.log(i + 1 + ' - Способ доп. заработка: ' + item);
            });
        }
    }
};
appData.chooseIncome();
for (let item in appData) {
    console.log("appData." + item + " = " + appData[item]);
}