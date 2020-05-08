import React, { Component } from "react";
import { inject, observer } from "mobx-react";

import { Header } from "../components";

class About extends Component {
  componentWillMount() {
    this.props.ArticlesStore.loadArticle();
  }

  render() {
    return (
      <div className="About">
        <Header />
        {this.props.ArticlesStore.article.article_title}
      </div>
    );
  }
}

export default inject("ArticlesStore")(observer(About));
