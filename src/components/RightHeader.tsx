import React, { Component } from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  FormOutlined,
  BookOutlined,
  ToolOutlined,
  LoginOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import "./RightHeader.scss";

class RightMenu extends Component {
  render() {
    return (
      <>
        <Menu mode="vertical">
          <Menu.Item key="home">
            <HomeOutlined className="icon" />홈
          </Menu.Item>
          <Menu.Item key="recruit">
            <ToolOutlined className="icon" />
            채용정보
          </Menu.Item>
          <Menu.Item key="knowhow">
            <FormOutlined className="icon" />
            노하우
          </Menu.Item>
          <Menu.Item key="blog">
            <BookOutlined className="icon" />
            블로그
          </Menu.Item>
          <Menu.Item key="signup">
            <SmileOutlined className="icon" />
            회원가입
          </Menu.Item>
          <Menu.Item key="login">
            <LoginOutlined className="icon" />
            로그인
          </Menu.Item>
        </Menu>
      </>
    );
  }
}
export default RightMenu;
