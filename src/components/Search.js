import React, { Component } from "react";

import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

class Search extends Component {
  render() {
    return (
      <div className="Search">
        <Input placeholder="Поиск" prefix={<SearchOutlined />} />
      </div>
    );
  }
}

export default Search;
