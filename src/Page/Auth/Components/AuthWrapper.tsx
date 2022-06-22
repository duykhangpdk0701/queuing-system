import { Col, Image, Row } from "antd";
import React, { ReactNode } from "react";
import styles from "./AuthWrapper.module.scss";
import illustrationHelp from "../../../Assets/illustrationHelp.svg";
import logo from "../../../Assets/logo.svg";
import LoginForm from "../Login/LoginForm";

interface IAuthWrapper {
  illustration: string;
  form: ReactNode;
}

const AuthWrapper: React.FC<IAuthWrapper> = (props) => {
  return (
    <Row className={styles.section}>
      <Col span={10} className={styles.leftContent}>
        <div className={styles.formContainer}>
          <div className={styles.logoContainer}>
            <Image src={props.illustration} preview={false} />
          </div>
          <div className={styles.formWrapper}>{props.form}</div>
        </div>
      </Col>
      <Col span={14} className={styles.rightContent}>
        <div>
          <Image src={illustrationHelp} preview={false} />
        </div>
      </Col>
    </Row>
  );
};

export default AuthWrapper;
