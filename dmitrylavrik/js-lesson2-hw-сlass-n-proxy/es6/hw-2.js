/* eslint-disable no-useless-escape */
// Реализовать фукнцию watchObj принимающую объект DOM и возвращающую Proxy.
// Подробности смотрите в файле lesson2.js
// return new Proxy(node, {...})
const watchObj = (node, callback) => new Proxy(node, {
    get(target, propKey) {
        if (typeof (target[propKey]) === 'object') {
            return watchObj(target[propKey], callback);
        } else if (typeof (target[propKey]) === 'function') {
            return target[propKey].bind(target);
        } else {
            return target[propKey];
        }
    },
    set(target, propKey, value) {
        callback(propKey, value);
        target[propKey] = value;
        return true; //подтверждает согласие с изменениями
    }
})

class EmailParser {
    constructor(email) {
        this.email = email;
    }
    get isCorrect() {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(this.email).toLowerCase());
    }
    get domain() {
        return this.isCorrect ? this.email.split("@")[1] : null;
    }
    get name() {
        return this.isCorrect ? this.email.split("@")[0] : null;
    }
}

export {
    watchObj,
    EmailParser
};