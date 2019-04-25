import 'babel-polyfill';
import * as ArticlesModel from './articles';

(async function Main() {
    let articles = await ArticlesModel.all();
    let ind = Math.floor(Math.random() * articles.length); // берём случайный индекс
    console.log('Articles count = ' + articles.length);
    console.log('Select index ' + ind + ', id = ' + articles[ind].id);

    let article = await ArticlesModel.one(articles[ind].id);
    console.log(article);

    let removeRes = await ArticlesModel.remove(article.id);
    console.log('Что с удалением? - ' + removeRes);

    let articlesAgain = await ArticlesModel.all();
    console.log('Articles count = ' + articlesAgain.length)

    return articlesAgain;
})().then(() => {}).catch((e) => console.log('Ошибка! / main.js' + e.msg));

