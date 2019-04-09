/**
 * ДЗ 7.2 - Создать редактор cookie с возможностью фильтрации
 *
 * На странице должна быть таблица со списком имеющихся cookie:
 * - имя
 * - значение
 * - удалить (при нажатии на кнопку, выбранная cookie удаляется из браузера и таблицы)
 *
 * На странице должна быть форма для добавления новой cookie:
 * - имя
 * - значение
 * - добавить (при нажатии на кнопку, в браузер и таблицу добавляется новая cookie с указанным именем и значением)
 *
 * Если добавляется cookie с именем уже существующией cookie, то ее значение в браузере и таблице должно быть обновлено
 *
 * На странице должно быть текстовое поле для фильтрации cookie
 * В таблице должны быть только те cookie, в имени или значении которых есть введенное значение
 * Если в поле фильтра пусто, то должны выводиться все доступные cookie
 * Если дабавляемая cookie не соответсвуте фильтру, то она должна быть добавлена только в браузер, но не в таблицу
 * Если добавляется cookie, с именем уже существующией cookie и ее новое значение не соответствует фильтру,
 * то ее значение должно быть обновлено в браузере, а из таблицы cookie должна быть удалена
 *
 * Для более подробной информации можно изучить код тестов
 *
 * Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/**
 * homeworkContainer - это контейнер для всех ваших домашних заданий
 * Если вы создаете новые html-элементы и добавляете их на страницу, то дабавляйте их только в этот контейнер
 *
 * @example
 * homeworkContainer.appendChild(...);
 */
let homeworkContainer = document.querySelector('#homework-container');
let filterNameInput = homeworkContainer.querySelector('#filter-name-input');
let addNameInput = homeworkContainer.querySelector('#add-name-input');
let addValueInput = homeworkContainer.querySelector('#add-value-input');
let addButton = homeworkContainer.querySelector('#add-button');
let listTable = homeworkContainer.querySelector('#list-table tbody');

//совпадает ли инпут с какой-нибудь кукой
const isMatching = (cookie, input) => (cookie.toLowerCase().indexOf(input.toLowerCase()) < 0) ? false : true
//функция, удаляющая все куки
const deleteAllCookies = () => {
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++)
        deleteCookie(cookies[i].split("=")[0]);
}
//добавить элемент в таблицу
const createTableElement = (name, value) => {
    let tr = document.createElement('tr');
    tr.innerHTML = `<td>${name}</td><td>${value}</td><td><button>Удалить</button></td>`;
    listTable.appendChild(tr);
}
//добавить куку
const addCookie = () => {
    let inputName = addNameInput.value;
    let inputValue = addValueInput.value;
    if (inputName == "" || inputValue == "") {
        alert("Какой хитрый, а ну заполняй поля!");
    } else {
        createCookie(inputName, inputValue);
        console.log('Cookie: ' + document.cookie);
        cookiesToTable();
    }
}
// куки в массив
const getСookiesArray = () => {
    let cookies = {};
    if (document.cookie && document.cookie != '') {
        let split = document.cookie.split(';');
        for (let i = 0; i < split.length; i++) {
            let nameValue = split[i].split("=");
            nameValue[0] = nameValue[0].replace(/^ /, '');
            cookies[decodeURIComponent(nameValue[0])] = decodeURIComponent(nameValue[1]);
        }
    }
    return cookies;
}

const cookiesToTable = () => {
    while (listTable.firstChild) {
        listTable.removeChild(listTable.firstChild);
    }
    //заполняем таблицу актуальными куками
    let cookies = getСookiesArray();
    for (let name in cookies) {
        if (isMatching(name, filterNameInput.value) || isMatching(cookies[name], filterNameInput.value)) {
            createTableElement(name, cookies[name])
        }
    }
}
//удалить куку
const deleteCookieViaButton = (e) => {
    if (e.target.nodeName === 'BUTTON') {
        listTable.removeChild(e.target.parentNode.parentNode);
        let deletingName = e.target.parentNode.parentNode.firstChild.innerHTML;
        deleteCookie(deletingName);
        cookiesToTable();
    }
}

// cookie без http сервера не работают
// удаляем все куки
//deleteAllCookies();
// обработчики событий

//заполняем таблицу имеющимися куками при загрузке 
window.addEventListener("load", cookiesToTable);

//заполняем таблицу подходящими по поиску куками
filterNameInput.addEventListener('keyup', cookiesToTable);

addButton.addEventListener('click', addCookie);

listTable.addEventListener('click', deleteCookieViaButton);