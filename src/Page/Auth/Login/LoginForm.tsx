import { Button, Form, Input } from "antd";
import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../Config/firebase";
import styles from "./LoginForm.module.scss";

type valuesSubmitType = {
  username: string;
  password: string;
};

const LoginForm = () => {
  const navigate = useNavigate();

  const onFinish = (values: valuesSubmitType) => {
    signInWithEmailAndPassword(
      auth,
      values.username + "@gmail.com",
      values.password,
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;

        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });

    console.log(values);
  };

  return (
    <Form name="login" layout="vertical" onFinish={onFinish}>
      <Form.Item
        name="username"
        label="Tên đăng nhập"
        required={false}
        rules={[{ required: true, message: "Vui lòng điền tên đăng nhập" }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Mật khẩu"
        required={false}
        rules={[{ required: true, message: "Vui lòng điền mật khẩu" }]}>
        <Input.Password size="large" />
      </Form.Item>
      <div className={styles.buttonContainer}>
        <Button htmlType="submit" type="primary" className={styles.button}>
          Đăng nhập
        </Button>
        <Link to="/auth/forget-password" className={styles.link}>
          Quên mật khẩu?
        </Link>
      </div>
    </Form>
  );
};

export default LoginForm;
