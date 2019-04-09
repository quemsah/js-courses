let money = +prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', new Date().toISOString().slice(0, 10));

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
let i = 0;
do {
    i++;
    let a = prompt('Введите обязательную статью расходов в этом месяце', '');
    let b = +prompt('Во сколько обойдется?', '');
    if ((typeof (a)) === 'string' &&
        (typeof (a)) != null &&
        (typeof (b)) != null &&
        a != '' &&
        b != '' &&
        a.length < 50) {
        console.log('Done!');
        appData.expenses[a] = b;
    } else {
        i--;
    }
} while (i < 2);

appData.modeyPerDay = (appData.budget / 30).toFixed(2);
console.log(appData.modeyPerDay);