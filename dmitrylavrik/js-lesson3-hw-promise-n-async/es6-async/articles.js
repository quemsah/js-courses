import * as serverApi from './db';

function all() {
    return new Promise(function (res, rej) {
        serverApi.all().then((response) => {
            let info = JSON.parse(response);
            if (info.code === 200) {
                res(info.data);
            } else {
                rej(info.status);
            }
        });
    });
}

function one(id) {
    return new Promise(function (res, rej) {
        serverApi.get(id).then((response) => {
            let info = JSON.parse(response);
            if (info.code === 200) {
                res(info.data);
            } else {
                rej(info.status);
            }
        });
    });
}

function remove(id) {
    return new Promise(function (res, rej) {
        serverApi.remove(id).then((response) => {
            let info = JSON.parse(response);
            if (info.code === 200) {
                res(info.data);
            } else {
                rej(info.status);
            }
        });
    });
}

export {
    all,
    one,
    remove
};