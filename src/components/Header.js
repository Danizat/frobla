import React, { Component } from "react";
import { Menu, Row, Col, Popover } from "antd";
import { MailOutlined, MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

import { Search, User } from "./index";

const PopoverMenu = (
  <Menu mode="vertical" theme="light">
    <Menu.Item key="about">
      <NavLink to="/about" activeClassName="selected">
        О сайте
      </NavLink>
    </Menu.Item>
    <Menu.Item key="blogs">
      <NavLink to="/blogs" activeClassName="selected">
        Блог
      </NavLink>
    </Menu.Item>
    <Menu.Item key="contacts">
      <NavLink to="/contacts" activeClassName="selected">
        Контакты
      </NavLink>
    </Menu.Item>
  </Menu>
);

class Header extends Component {
  state = {
    popoverOpen: false,
  };

  toggleCollapsed = () => {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
    });
  };

  render() {
    return (
      <div className="Header">
        <Row justify="space-around" align="middle">
          <Col xl={4} lg={4} md={4} sm={6} xs={6}>
            <NavLink to="/" activeClassName="selected">
              <div className="logo"> </div>
            </NavLink>
          </Col>
          <Col xl={6} lg={6} md={7} sm={6} xs={6}>
            <Search />
          </Col>
          <Col xl={10} lg={10} md={10} sm={0} xs={0}>
            <Menu mode="horizontal">
              <Menu.Item key="about">
                <MailOutlined />
                <NavLink to="/about" activeClassName="selected">
                  О сайте
                </NavLink>
              </Menu.Item>
              <Menu.Item key="blogs">
                <MailOutlined />
                <NavLink to="/blogs" activeClassName="selected">
                  Блог
                </NavLink>
              </Menu.Item>
              <Menu.Item key="contacts">
                <MailOutlined />
                <NavLink to="/contacts" activeClassName="selected">
                  Контакты
                </NavLink>
              </Menu.Item>
            </Menu>
          </Col>
          <Col xl={4} lg={4} md={3} sm={6} xs={6} align="left">
            <User />
          </Col>
          <Col xl={0} lg={0} md={0} sm={6} xs={6}>
            <Popover
              placement="bottomRight"
              content={PopoverMenu}
              trigger="click"
              onClick={this.toggleCollapsed}
            >
              {React.createElement(
                this.state.popoverOpen ? CloseOutlined : MenuOutlined
              )}
            </Popover>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
