import React, { Component } from "react";
import "./Header.scss";
import { Drawer, Menu, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Logo from "../assets/mainlogo.png";
import RightMenu from "./RightHeader";

class Header extends Component {
  state = {
    current: "mail",
    visible: false,
  };
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    return (
      <>
        <div className="header">
          <img src={Logo} alt="logo" width="126px" />

          <div className="main-nav-list">
            <Menu mode="horizontal">
              <Menu.Item className="navItem" key="item1">
                홈
              </Menu.Item>
              <Menu.Item className="navItem" key="item2">
                채용정보
              </Menu.Item>
              <Menu.Item className="navItem" key="item3">
                노하우
              </Menu.Item>
              <Menu.Item className="navItem" key="item4">
                블로그
              </Menu.Item>
            </Menu>
          </div>
          <div className="signup-nav">
            <Button className="navButton" type="text" size="large">
              회원가입
            </Button>
            <Button className="navButton" type="primary" size="large">
              로그인
            </Button>
          </div>
        </div>
        <>
          <div className="res-header">
            <img src={Logo} alt="logo" width="126px" />
          </div>
          <div className="res-btn"></div>
          <div className="res-btn">
            <MenuOutlined className="barsMenu" onClick={this.showDrawer} />
            <Drawer
              title={<img src={Logo} alt="logo" width="126px" />}
              placement="right"
              closable={false}
              onClose={this.onClose}
              visible={this.state.visible}
            >
              <RightMenu />
            </Drawer>
          </div>
        </>
      </>
    );
  }
}
export default Header;
