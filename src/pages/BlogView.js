import React, { Component } from "react";
import { Row, Col } from "antd";
import ReactMarkdown from "react-markdown";
import { inject, observer } from "mobx-react";

import { Header, Sidebar } from "../components";

class BlogView extends Component {
  componentWillMount() {
    this.props.ArticlesStore.loadArticle(this.props.match.params.id);
  }

  render() {
    let { article } = this.props.ArticlesStore;

    return (
      <div className="Blogs">
        <Header />
        <div className="Container">
          <Row justify="space-around">
            <Col xl={17} lg={17} md={17} sm={24} xs={24}>
              <h1>{article.article_title}</h1>
              <h1>{article.article_description}</h1>
              <h1>{article.published_date}</h1>
              <ReactMarkdown
                source={article.article_content}
                escapeHtml={false}
              />
            </Col>
            <Col xl={6} lg={6} md={6} sm={24} xs={24}>
              <Sidebar />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default inject("ArticlesStore")(observer(BlogView));
