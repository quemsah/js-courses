/**
 * Глобальная вероятность успеха для удобства тестирования
 */
const GLOBAL_PROPABILITY = 1;
const BAD_JSON_PROPABILITY = 0;

/**
 * Получить все записи из хранилища
 * @param {callable} onAnswer Функция, обрабатывающая ответ от сервера в формате JSON 
 */
export const all = () => new Promise((res, rej) => TimeoutPropabiliry(300, GLOBAL_PROPABILITY)
    .then(() => {
        res(serverAnswer(articlesStorage));
    })
    .catch(() => {
        res(serverAnswer('', 100500, "Propability Error"));
    }))

/**
 * Получить статью по id
 * @param {int} id Id статьи
 * @param {callable} onAnswer Функция, обрабатывающая ответ от сервера в формате JSON 
 */
export const get = (id) => new Promise((res, rej) => TimeoutPropabiliry(300, GLOBAL_PROPABILITY)
    .then(() => {
        res(serverAnswer(articlesStorage[mapArticles[id]]));
    })
    .catch(() => {
        res(serverAnswer('', 100500, "Propability Error"));
    }))

/**
 * Удалить статью из базы
 * @param {int} id Id статьи
 * @param {callable} onAnswer Функция, обрабатывающая ответ от сервера в формате JSON  
 */
export const remove = (id, onAnswer) => new Promise((res, rej) => TimeoutPropabiliry(300, GLOBAL_PROPABILITY)
    .then(() => {
        if (id in mapArticles) {
            let num = mapArticles[id];
            delete mapArticles[id];
            articlesStorage.splice(num, 1);
            res(serverAnswer(true));
        } else {
            res(false);
        }
    })
    .catch(() => {
        res(serverAnswer('', 100500, "Propability Error"));
    }))

/* полуприватная часть, вдруг захотите сделать промис :) */
function TimeoutPropabiliry(time, probability) {
    return new Promise(function (res, rej) {
        window.setTimeout(() => {
            Math.random() < probability ? res() : rej();
        }, time);
    });
}

const serverAnswer = (data, code = 200, status = "OK") => (Math.random() < BAD_JSON_PROPABILITY) ? 'incorrect json' : JSON.stringify({
    code,
    status,
    data
});

/*  приватная часть */
let articlesStorage = [{
        id: 1,
        title: 'Профисификация кода',
        dt: '2018-12-06',
        text: 'Код без промисов бывает жестью, но и с ними можно изобразить много странного.'
    },
    {
        id: 2,
        title: 'Итераторы и генераторы',
        dt: '2018-12-01',
        text: 'Сначала пугают всех, кто к ним прикасается, а Symbol кажется бредом.'
    },
    {
        id: 5,
        title: 'Javascript',
        dt: '2018-12-02',
        text: 'Всё равно хороший язык программирования.'
    }
];

let mapArticles = {};

articlesStorage.forEach((item, i) => {
    mapArticles[item.id] = i;
});