document.addEventListener("DOMContentLoaded", () => {
    //Задание 9
    let info = document.getElementsByClassName("info-header")[0];
    let title = document.getElementsByClassName("info-header-tab");
    let content = document.getElementsByClassName("info-tabcontent");

    info.addEventListener("click", e => {
        for (let i = 0; i < title.length; i++) {
            if (e.target == title[i]) {
                //удаляем табы перебором массива ключей
                Object.keys(content).map(i => {
                    content[i].classList.remove("show");
                    content[i].classList.add("hide");
                });
                // показываем i-тый (на него кликнули – проверка в if`e)
                content[i].classList.remove("hide");
                content[i].classList.add("show");
                break;
            }
        }
    });
    //Задание 10
    let deadLine = "2019-07-04";

    const getTimeRemaining = endtime => {
        endtime = endtime.split("-");
        let t = new Date(endtime[0], endtime[1], endtime[2]) - Date.parse(new Date());
        //let t = Date.parse(endtime) - Date.parse(new Date());
        return {
            total: t,
            hours: Math.floor((t / 1000 / 3600) % 60),
            minutes: Math.floor((t / 1000 / 60) % 60),
            seconds: Math.floor((t / 1000) % 60)
        };
    };

    ((id, endtime) => {
        let timer = document.getElementById(id);
        let seconds = timer.querySelector(".seconds");
        let minutes = timer.querySelector(".minutes");
        let hours = timer.querySelector(".hours");
        let timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            //добавление нолика к одиночным цифрам
            for (let key in t) {
                (t[key].toString().length == 1) ? t[key] = "0" + t[key]: null;
            }
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;
            (t.total <= 0) ? clearInterval(timeInterval): null;
        }
    })("timer", deadLine);
    //Задание 11
    let more = document.body.getElementsByClassName('more')[0];
    let overlay = document.body.getElementsByClassName('overlay')[0];
    let close = document.body.getElementsByClassName('popup-close')[0];
    let descBtn = document.body.getElementsByClassName('description-btn');

    const showModal = () => {
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    more.addEventListener('click', showModal);
    for (let item of descBtn) {
        item.addEventListener('click', showModal);
    }
    close.addEventListener('click', () => {
        overlay.style.display = 'none';
        more.classList.remove('more-spalsh');
        document.body.style.overflow = '';
    });
});
//Задание 13
let statusMessage = document.createElement('div');
statusMessage.classList.add('status');

let msg = {
    loading: "Загрузка...",
    success: "Успешно, спасибо, ждите звонка",
    fail: "Что-то пошло не так"
};
//ч.1 модальное окно
let form = document.querySelector('.main-form');
let input = form.getElementsByTagName('input');
form.addEventListener('submit', e => {
    e.preventDefault();
    form.appendChild(statusMessage);

    let URL = 'server.php';
    let headers = {
        'Content-Type': 'application/json'
    }
    let formData = new FormData(form);
    let obj = {};
    formData.forEach((value, key) => obj[key] = value);
    let json = JSON.stringify(obj);

    fetch(URL, {
        method: "POST",
        headers: headers,
        body: json,
    }).then((res) => {
        (res.ok) ? statusMessage.innerHTML = msg.success: statusMessage.innerHTML = msg.fail;
    });
    for (let i = 0; i < input.length; i++) {
        input[i].value = '';
    }
});

//ч.2 контактная форма
let contactForm = document.getElementById('form');
contactForm.addEventListener('submit', e => {
    e.preventDefault();
    contactForm.appendChild(statusMessage);

    let URL = 'server.php';
    let headers = {
        'Content-Type': 'application/json'
    }
    let formData = new FormData(contactForm);
    let obj = {};
    formData.forEach((value, key) => obj[key] = value);
    let json = JSON.stringify(obj);

    fetch(URL, {
        method: "POST",
        headers: headers,
        body: json,
    }).then((res) => {
        (res.ok) ? statusMessage.innerHTML = msg.success: statusMessage.innerHTML = msg.fail;
    });
    for (let i = 0; i < input.length; i++) {
        input[i].value = '';
    }
});