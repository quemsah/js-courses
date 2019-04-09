let money = prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', new Date().toISOString().slice(0, 10));
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
let expense1 = prompt('Введите обязательную статью расходов в этом месяце', '');
appData.expenses[expense1] = prompt('Во сколько обойдется?', '');
let expense2 = prompt('Введите вторую обязательную статью расходов в этом месяце', '');
appData.expenses[expense2] = prompt('Во сколько обойдется?', '');
alert((appData.expenses[expense1]/30).toFixed(2) + ' руб/день на ' + expense1 + ' и ' + (appData.expenses[expense2]/30).toFixed(2) + ' руб/день на ' + expense2 );
console.log(appData);