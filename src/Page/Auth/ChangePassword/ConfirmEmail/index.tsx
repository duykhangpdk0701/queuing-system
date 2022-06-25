import { Button, Form, Input, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { valuesSubmitConfirmEmailType } from "..";
import styles from "./ConfirmEmail.module.scss";

interface IConfirmEmail {
  onFinish: (values: valuesSubmitConfirmEmailType) => void;
}

const { Text } = Typography;

const ConfirmEmail: React.FC<IConfirmEmail> = (props) => {
  return (
    <Form
      className={styles.form}
      name="forget-password-form"
      layout="vertical"
      onFinish={props.onFinish}
    >
      <div className={styles.titleWrapper}>
        <Text className={styles.title}>Đặt lại mật khẩu</Text>
      </div>

      <Form.Item
        name="forget-password"
        label="Vui lòng nhập email để đặt lại mật khẩu của bạn *"
        required={false}
        rules={[
          { required: true, message: "Vui lòng nhập email" },
          { type: "email", message: "Email không hợp lệ" },
        ]}
      >
        <Input size="large" />
      </Form.Item>
      <div className={styles.buttonContainer}>
        <Button size="large" className={styles.button} type="primary" ghost>
          <Link to="/auth">Hủy</Link>
        </Button>
        <Button
          size="large"
          htmlType="submit"
          className={styles.button}
          type="primary"
        >
          Tiếp tục
        </Button>
      </div>
    </Form>
  );
};

export default ConfirmEmail;
