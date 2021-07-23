import React from "react";
import "./Header.scss";
import { Input, Menu, Button } from "antd";
import Logo from "../assets/mainlogo.png";

function Header() {
  return (
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
  );
}
export default Header;
