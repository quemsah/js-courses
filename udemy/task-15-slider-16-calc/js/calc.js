let persons = document.querySelectorAll('.counter-block-input')[0];
let restDays = document.querySelectorAll('.counter-block-input')[1];
let place = document.getElementById('select');
let totalValue = document.getElementById('total');
let personsSum = 0;
let daysSum = 0;
let total = 0;

totalValue.innerHTML = 0;

const calcTotal = (daysSum, personsSum) => {
    total = (daysSum + personsSum) * 4000;
    (restDays.value == '') ? totalValue.innerHTML = 0: totalValue.innerHTML = total;
}

persons.addEventListener('change', function (e) {
    calcTotal(daysSum, +this.value);
});

restDays.addEventListener('change', function (e) {
    calcTotal(+this.value, personsSum);
});

place.addEventListener('change', function (e) {
    if (restDays.value == '' || persons.value == '') {
        totalValue.innerHTML = 0;
    } else {
        totalValue.innerHTML = total * this.options[this.selectedIndex].value;
    }
});