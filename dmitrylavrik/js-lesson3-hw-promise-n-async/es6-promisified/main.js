import 'babel-polyfill';
import * as ArticlesModel from './articles';

ArticlesModel.all()
    .then((articles) => {
        console.log('Articles count = ' + articles.length);
        let ind = Math.floor(Math.random() * articles.length); // берём случайный индекс
        console.log('Select index ' + ind + ', id = ' + articles[ind].id);
        return ArticlesModel.one(articles[ind].id)
    })
    .then((article) => {
        console.log(article);
        return ArticlesModel.remove(article.id)
    })
    .then((removeRes) => {
        console.log('Что с удалением? - ' + removeRes);
        return ArticlesModel.all()
    })
    .then((articles) => console.log('Articles count = ' + articles.length))
    .catch((e) => console.log('Ошибка! /main.js ' + e.msg));