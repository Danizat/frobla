import React, { Component } from "react";
import { Row, Col } from "antd";
import { Card } from "antd";
import ReactMarkdown from "react-markdown";
import { inject, observer } from "mobx-react";

import { Header, Sidebar } from "../components";
import { Link } from "react-router-dom";

class Blogs extends Component {
  componentWillMount() {
    this.props.ArticlesStore.loadArticles();
  }

  render() {
    let { articles } = this.props.ArticlesStore;

    return (
      <div className="Blogs">
        <Header />
        <div className="Container">
          <Row justify="space-around">
            <Col xl={17} lg={17} md={17} sm={24} xs={24}>
              {articles.map((a) => {
                return (
                  <div className="blogCard" key={a.id}>
                    <Card title={a.article_title}>
                      <ReactMarkdown
                        source={a.article_description}
                        escapeHtml={false}
                      />
                      <Link to={`/blogs/${a.id}`}>Подробнее</Link>
                    </Card>
                  </div>
                );
              })}
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

export default inject("ArticlesStore")(observer(Blogs));
