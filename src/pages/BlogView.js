import React, { Component } from "react";
import { Row, Col } from "antd";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";

import { Header, Sidebar } from "../components";

class BlogView extends Component {
  render() {
    const { params } = this.props.match;
    return (
      <div className="Blogs">
        <Header />
        <div className="Container">
          <Row justify="space-around">
            <Col xl={17} lg={17} md={17} sm={24} xs={24}>
              <h1>About {params.id}</h1>
              <h1>About {params.article_description}</h1>
              <h1>About {params.id}</h1>
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

export default BlogView;
