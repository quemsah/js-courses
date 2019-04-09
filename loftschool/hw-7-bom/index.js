/* ДЗ 7.1 - BOM */

/**
 * Функция должна создавать окно с указанным именем и размерами
 *
 * @param {number} name - имя окна
 * @param {number} width - ширина окна
 * @param {number} height - высота окна
 * @return {Window}
 */
const createWindow = (name, width, height) => {
    let options = `width=${width},height=${height}`;
    console.log(options);
    return window.open('/', name, options);
}

/**
 * Функция должна закрывать указанное окно
 *
 * @param {Window} window - окно, размер которого надо изменить
 */
const closeWindow = (window) => window.close()

/**
 * Функция должна создавать cookie с указанными именем и значением
 *
 * @param name - имя
 * @param value - значение
 */
const createCookie = (name, value) => document.cookie = `${name}=${value}`

/**
 * Функция должна удалять cookie с указанным именем
 *
 * @param name - имя
 */
const deleteCookie = (name) => document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'