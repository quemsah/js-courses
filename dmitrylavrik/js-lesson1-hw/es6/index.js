import * as hw1 from './hw-1.js';
window.addEventListener('load', () => {
    let str = 'Florida Man is a Twitter feed that curates news headline descriptions of bizarre domestic incidents involving a male subject residing in the state of Florida';

    console.log(hw1.wordsCount(str)); // 25
    for (let item of hw1.getWords(str)) {
        console.log(item); // выводит 25 слов
    }
});