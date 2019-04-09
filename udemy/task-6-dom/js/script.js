//Восстановить порядок в меню, добавить пятый пункт
let menu = document.querySelector('.menu');
menu.insertBefore(menu.childNodes[5], menu.childNodes[3]);

//Добавить пятый пункт
let elem5th = document.createElement('li');
elem5th.className = "menu-item";
elem5th.textContent = "Пятый пункт";
menu.appendChild(elem5th);

//Заменить картинку заднего фона на другую из папки img
document.body.style.backgroundImage = "url(img/apple_true.jpg)";

//Поменять заголовок, добавить слово "подлинную" 
document.querySelector('.title').firstChild.textContent = "Мы продаем только подлинную технику Apple";

//Удалить рекламу со страницы
document.querySelector('.adv').remove();

//Спросить у пользователя отношение к технике apple 
//Записать ответ в блок на странице с id "prompt"
let prmpt = document.getElementById('prompt');
prmpt.textContent =prompt('Как вы относитесь к технике Apple?', '');