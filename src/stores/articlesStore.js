import { observable, decorate, action } from "mobx";
import axios from "axios";

export class ArticlesStore {
  articles = [];
  article = {};

  loadArticles = () => {
    axios
      .get(`http://localhost:8000/api/articles/`)
      .then((res) => {
        this.articles = res.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  loadArticle = (articleId) => {
    axios
      .get(`http://localhost:8000/api/articles/${articleId}`)
      .then((res) => {
        this.article = res.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}

decorate(ArticlesStore, {
  articles: observable,
  article: observable,
  loadArticles: action,
  loadArticle: action,
});

export default new ArticlesStore();
