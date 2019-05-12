import * as serverApi from './db';

const eCatchFunc = (e) => console.log('Ошибка! /articles.js : ' + e.msg);

const all = () => new Promise((res, rej) => serverApi.all()
    .then((response) => {
        let info = JSON.parse(response);
        (info.code === 200) ? res(info.data): rej(info.status);
    })
    .catch(eCatchFunc));

const one = (id) => new Promise((res, rej) => serverApi.get(id)
    .then((response) => {
        let info = JSON.parse(response);
        (info.code === 200) ? res(info.data): rej(info.status);
    })
    .catch(eCatchFunc));

const remove = (id) => new Promise((res, rej) => serverApi.remove(id)
    .then((response) => {
        let info = JSON.parse(response);
        (info.code === 200) ? res(info.data): rej(info.status);
    })
    .catch(eCatchFunc));

export {
    all,
    one,
    remove
};