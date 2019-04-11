(function (surname, name) {
    console.log("User " + surname + " " + name);
    console.log("Age " + this.value);
}).call(document.getElementById('age'), 'Сергей', 'Бодров');