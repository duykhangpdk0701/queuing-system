import { Col, Form, Row, Typography } from "antd";
import React from "react";
import DatePickerRange from "../../../Components/DatePickerRange";
import SearchInput from "../../../Components/SearchInput";
import styles from "./HistoryLayout.module.scss";
import HistoryTable from "./HistoryTable";

const HistoryLayout = () => {
  return (
    <div className={styles.section}>
      <Form layout="vertical">
        <Row justify="space-between" className={styles.inputContainer}>
          <Col>
            <Form.Item
              label={<Typography.Text strong>Chọn thời gian </Typography.Text>}
            >
              <DatePickerRange />
            </Form.Item>
          </Col>
          <Col flex="300px">
            <Form.Item
              label={<Typography.Text strong>Từ khóa</Typography.Text>}
            >
              <SearchInput size="large" placeholder="Nhập từ khóa" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col flex="auto">
            <HistoryTable />
          </Col>
          <Col flex="100px"></Col>
        </Row>
      </Form>
    </div>
  );
};

export default HistoryLayout;
