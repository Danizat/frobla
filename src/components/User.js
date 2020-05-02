import React, { Component } from "react";
import { Popover, Modal, Tabs } from "antd";

const { TabPane } = Tabs;

class User extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div className="User">
        <Popover
          placement="bottom"
          content={
            <div className="UserPopoverContent">
              <p onClick={this.showModal}>Авторизуйтесь</p>
            </div>
          }
          trigger="click"
        >
          <div className="UserAvatar">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn2.iconfinder.com%2Fdata%2Ficons%2Ffruits-and-vegetables%2F100%2F_cherry-512.png&f=1&nofb=1"
              alt="useravatar"
            />
          </div>
        </Popover>
        <Modal
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Tabs defaultActiveKey="1">
            <TabPane tab="Регистрация" key="1">
              Регистрация
            </TabPane>
            <TabPane tab="Войти" key="2">
              Войти
            </TabPane>
          </Tabs>
        </Modal>
      </div>
    );
  }
}

export default User;
