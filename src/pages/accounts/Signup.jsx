import React, { useState } from "react";
import { Form, Input, Button, notification } from "antd";
import { SmileOutlined, FrownOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import "./Signup.scss";
import SignupLogo from "../../assets/accounts/sign_image.jpg";

function Signup() {
  const history = useHistory();
  const [fieldErrors, setFieldErrors] = useState({});

  const onFinish = (values) => {
    async function fn() {
      console.log(values);
      const { username, email, password1, password2 } = values;
      setFieldErrors({});
      const data = { username, email, password1, password2 };
      console.log(data);
      try {
        Axios.post("http://127.0.0.1:8000/api/v1/account/registration/", data);

        notification.open({
          message: "회원가입이 완료되었습니다.",
          description: "로그인 페이지로 이동합니다.",
          icon: <SmileOutlined style={{ color: "#3e9eda" }} />,
        });

        history.push("login");
      } catch (error) {
        if (error.response) {
          notification.open({
            message: "회원가입에 실패했습니다.",
            description: "이메일 주소와 암호를 확인해주세요.",
            icon: <FrownOutlined style={{ color: "#ff3333" }} />,
          });

          const { data: fieldsErrorMessages } = error.response;
          setFieldErrors(
            Object.entries(fieldsErrorMessages).reduce(
              (acc, [fieldName, errors]) => {
                acc[fieldName] = {
                  validateStatus: "error",
                  help: errors.join(" "),
                };
                return acc;
              },
              {}
            )
          );
        }
      }
    }
    fn();
  };
  return (
    <div className="container">
      <div className="item left-item">
        <img src={SignupLogo} alt="SignupLogo" height="650px" width="100%" />
      </div>
      <div className="item">
        <div className="right-item">
          <div className="signup-top-wrap">
            <div className="icon">
              <SmileOutlined />
            </div>
            회원가입
          </div>
          <div className="signup-form">
            <Form
              className="signup"
              name="basic"
              layout="vertical"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item label="" name="username"></Form.Item>
              <div className="signup-item">
                <Form.Item
                  label="이메일"
                  name="email"
                  rules={[
                    {
                      required: true,
                      type: "email",
                      message: "이메일 주소를 입력하세요!",
                    },
                  ]}
                  hasFeedback
                  {...fieldErrors.email}
                >
                  <Input />
                </Form.Item>
              </div>
              <div className="signup-item">
                <Form.Item
                  label="비밀번호"
                  name="password1"
                  rules={[
                    { required: true, message: "비밀번호를 입력하세요!" },
                  ]}
                  {...fieldErrors.password1}
                >
                  <Input.Password />
                </Form.Item>
              </div>
              <div className="signup-item">
                <Form.Item
                  label="비밀번호확인"
                  name="password2"
                  rules={[
                    { required: true, message: "비밀번호를 입력하세요!" },
                  ]}
                  {...fieldErrors.password2}
                >
                  <Input.Password />
                </Form.Item>
              </div>
              <div className="signup-btn">
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    shape="round"
                    style={{
                      width: "100%",
                      marginTop: "5rem",
                      background: "#3e9eda",
                    }}
                  >
                    회원가입
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
        <div></div>
      </div>
    </div>
    // <div>
    //   <div className="main-text">BlueCollar 회원가입</div>
    //   <Form
    //     className="signup-form"
    //     name="basic"
    //     layout="vertical"
    //     labelCol={{ span: 6, offset: 9 }}
    //     wrapperCol={{ span: 6, offset: 9 }}
    //     initialValues={{ remember: true }}
    //     onFinish={onFinish}
    //   >
    //     <Form.Item
    //       label="이메일"
    //       name="email"
    //       rules={[
    //         {
    //           required: true,
    //           type: "email",
    //           message: "이메일 주소를 입력하세요!",
    //         },
    //       ]}
    //       hasFeedback
    //       {...fieldErrors.email}
    //     >
    //       <Input />
    //     </Form.Item>

    //     <Form.Item
    //       label="비밀번호"
    //       name="password"
    //       rules={[{ required: true, message: "비밀번호를 입력하세요!" }]}
    //       {...fieldErrors.password}
    //     >
    //       <Input.Password />
    //     </Form.Item>

    //     <Form.Item wrapperCol={{ span: 6, offset: 9 }}>
    //       <Button
    //         type="primary"
    //         htmlType="submit"
    //         className="signup-form-button"
    //       >
    //         회원가입
    //       </Button>
    //     </Form.Item>
    //   </Form>
    // </div>
  );
}

export default Signup;
