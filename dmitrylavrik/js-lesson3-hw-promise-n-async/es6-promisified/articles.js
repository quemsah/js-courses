import * as serverApi from './db';

const all = () => new Promise((res, rej) => serverApi.all()
    .then((response) => {
        let info = JSON.parse(response);
        (info.code === 200) ? res(info.data): rej(info.status);
    })
    .catch((e) => console.log('Ошибка!' + e.msg)))

const one = (id) => new Promise((res, rej) => serverApi.get(id)
    .then((response) => {
        let info = JSON.parse(response);
        (info.code === 200) ? res(info.data): rej(info.status);
    })
    .catch((e) => console.log('Ошибка!' + e.msg)))

const remove = (id) => new Promise((res, rej) => serverApi.remove(id)
    .then((response) => {
        let info = JSON.parse(response);
        (info.code === 200) ? res(info.data): rej(info.status);
    })
    .catch((e) => console.log('Ошибка!' + e.msg)))

export {
    all,
    one,
    remove
};